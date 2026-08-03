"""Workspace routes: list, create, update, delete."""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from extensions import db
from models.workspace import Workspace
from models.user import User
from schemas.workspace_schema import workspace_schema, workspaces_schema

workspaces_bp = Blueprint("workspaces", __name__, url_prefix="/workspaces")


@workspaces_bp.route("", methods=["GET"])  # GET /workspaces
@jwt_required()
def list_workspaces():
    user_id = int(get_jwt_identity())
    workspaces = Workspace.query.filter_by(owner_id=user_id).all()
    return jsonify({"workspaces": workspaces_schema.dump(workspaces)})


@workspaces_bp.route("", methods=["POST"])  # POST /workspaces
@jwt_required()
def create_workspace():
    user_id = int(get_jwt_identity())
    data = request.get_json() or {}
    name = data.get("name")
    if not name:
        return jsonify({"message": "name is required"}), 400

    ws = Workspace(name=name, owner_id=user_id)
    db.session.add(ws)
    db.session.commit()
    return jsonify({"workspace": workspace_schema.dump(ws)}), 201


@workspaces_bp.route("/<int:ws_id>", methods=["PATCH"])  # PATCH /workspaces/<id>
@jwt_required()
def update_workspace(ws_id):
    user_id = int(get_jwt_identity())
    ws = Workspace.query.get_or_404(ws_id)
    if ws.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    data = request.get_json() or {}
    name = data.get("name")
    if name:
        ws.name = name
        db.session.commit()

    return jsonify({"workspace": workspace_schema.dump(ws)})


@workspaces_bp.route("/<int:ws_id>", methods=["DELETE"])  # DELETE /workspaces/<id>
@jwt_required()
def delete_workspace(ws_id):
    user_id = int(get_jwt_identity())
    ws = Workspace.query.get_or_404(ws_id)
    if ws.owner_id != user_id:
        return jsonify({"message": "forbidden"}), 403

    db.session.delete(ws)
    db.session.commit()
    return jsonify({"message": "deleted"})
