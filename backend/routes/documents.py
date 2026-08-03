"""Document routes: CRUD, sidebar, and search."""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import or_

from extensions import db
from models.document import Document
from models.workspace import Workspace
from schemas.document_schema import document_schema, documents_schema

documents_bp = Blueprint("documents", __name__, url_prefix="/documents")


@documents_bp.route("", methods=["GET"])  # GET /documents
@jwt_required()
def list_documents():
    user_id = int(get_jwt_identity())
    # Optionally filter by workspace via query param
    workspace_id = request.args.get("workspace_id", type=int)
    q = Document.query.filter_by(owner_id=user_id)
    if workspace_id:
        q = q.filter_by(workspace_id=workspace_id)
    docs = q.all()
    return jsonify({"documents": documents_schema.dump(docs)})

@documents_bp.route("/<int:doc_id>", methods=["GET"])
@jwt_required()
def get_document(doc_id):
    user_id = int(get_jwt_identity())

    doc = Document.query.get_or_404(doc_id)

    print("JWT user:", user_id, type(user_id))
    print("Doc owner:", doc.owner_id, type(doc.owner_id))

    if doc.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    return jsonify({"document": document_schema.dump(doc)})
## @documents_bp.route("/<int:doc_id>", methods=["GET"])  # GET /documents/<id>
##@jwt_required()
##def get_document(doc_id):
    ##user_id = int(get_jwt_identity())
    ##doc = Document.query.get_or_404(doc_id)
    ##if doc.owner_id != user_id:
      ##  return jsonify({"message": "forbidden"}), 403
    ##return jsonify({"document": document_schema.dump(doc)})


@documents_bp.route("", methods=["POST"])
@jwt_required()
def create_document():
    user_id = int(get_jwt_identity())

    data = request.get_json() or {}
    title = data.get("title") or "Untitled"

    workspace = Workspace.query.filter_by(owner_id=user_id).first()

    if workspace is None:
        return jsonify({"message": "No workspace found for this user."}), 400

    doc = Document(
        title=title,
        content=data.get("content"),
        icon=data.get("icon"),
        cover_image=data.get("cover_image"),
        parent_id=data.get("parent_id"),
        workspace_id=workspace.id,
        owner_id=user_id,
    )

    db.session.add(doc)
    db.session.commit()

    return jsonify({
        "document": document_schema.dump(doc)
    }), 201


@documents_bp.route("/<int:doc_id>", methods=["PATCH"])  # PATCH /documents/<id>
@jwt_required()
def update_document(doc_id):
    user_id = int(get_jwt_identity())
    doc = Document.query.get_or_404(doc_id)
    if doc.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    data = request.get_json() or {}
    for field in ("title", "content", "icon", "cover_image", "parent_id", "is_archived", "is_published"):
        if field in data:
            setattr(doc, field, data[field])
    db.session.commit()
    return jsonify({"document": document_schema.dump(doc)})


@documents_bp.route("/<int:doc_id>", methods=["DELETE"])  # DELETE /documents/<id>
@jwt_required()
def delete_document(doc_id):
    user_id = int(get_jwt_identity())
    doc = Document.query.get_or_404(doc_id)
    if doc.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    db.session.delete(doc)
    db.session.commit()
    return jsonify({"message": "deleted"})


@documents_bp.route("/sidebar", methods=["GET"])  # GET /documents/sidebar
@jwt_required()
def sidebar():
    """Return a compact tree of top-level documents for the sidebar.

    For simplicity, return documents without their children expanded. The
    frontend can fetch individual documents as needed.
    """
    user_id = int(get_jwt_identity())

    workspace_id = request.args.get("workspace_id", type=int)
    parent_id = request.args.get("parent_id", type=int)

    q = Document.query.filter_by(
        owner_id=user_id,
        is_archived=False,
    )

    if workspace_id:
        q = q.filter_by(workspace_id=workspace_id)

    if parent_id is None:
        q = q.filter_by(parent_id=None)
    else:
        q = q.filter_by(parent_id=parent_id)

    docs = q.order_by(Document.created_at.asc()).all()

    return jsonify({
        "sidebar": documents_schema.dump(docs)
})

@documents_bp.route("/trash", methods=["GET"])
@jwt_required()
def trash_documents():
    user_id = int(get_jwt_identity())

    documents = (
        Document.query.filter_by(
            owner_id=user_id,
            is_archived=True,
        )
        .order_by(Document.updated_at.desc())
        .all()
    )

    return jsonify({
        "documents": documents_schema.dump(documents)
    })

@documents_bp.route("/<int:doc_id>/restore", methods=["PATCH"])
@jwt_required()
def restore_document(doc_id):
    user_id = int(get_jwt_identity())

    document = Document.query.get_or_404(doc_id)

    if document.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    document.is_archived = False

    db.session.commit()

    return jsonify({
        "document": document_schema.dump(document)
    })

@documents_bp.route("/search", methods=["GET"])  # GET /documents/search?q=
@jwt_required()
def search_documents():
    user_id = int(get_jwt_identity())
    qstr = request.args.get("q", "").strip()

    if not qstr:
        return jsonify({"documents": []})

    docs = (
    Document.query.filter(
        Document.owner_id == user_id,
        Document.is_archived.is_(False)    )
    .filter(
        or_(
            Document.title.ilike(f"%{qstr}%"),
            Document.content.ilike(f"%{qstr}%"),
        )
    )
    .limit(50)
    .all()
)
    return jsonify({
    "documents": documents_schema.dump(docs)
    })

@documents_bp.route("/preview/<int:doc_id>", methods=["GET"])
def preview_document(doc_id):
    document = Document.query.get_or_404(doc_id)

    if not document.is_published:
        return jsonify({"message": "Document is not published"}), 403

    return jsonify({
        "document": document_schema.dump(document)
    })