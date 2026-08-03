"""Authentication routes: register, login, and current user endpoint."""
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from extensions import db
from models.user import User
from models.workspace import Workspace
from schemas.user_schema import user_schema
from schemas.workspace_schema import WorkspaceSchema
auth_bp = Blueprint("auth", __name__, url_prefix="/")


@auth_bp.route("/register", methods=["POST"])  # POST /register
def register():
    data = request.get_json() or {}
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"message": "username, email and password required"}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({"message": "user with that username or email already exists"}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.flush()   

    workspace = Workspace(
    name=f"{username}'s Workspace",
    owner_id=user.id,
)

    db.session.add(workspace)
    db.session.commit()

    return jsonify({"user": user_schema.dump(user)}), 201


@auth_bp.route("/login", methods=["POST"])  # POST /login
def login():
    data = request.get_json() or {}
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "email and password required"}), 400

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"message": "invalid credentials"}), 401

    # Use string identity to avoid potential JWT subject type issues
    access_token = create_access_token(identity=str(user.id))
    return jsonify({"access_token": access_token, "user": user_schema.dump(user)})


@auth_bp.route("/me", methods=["GET"])  # GET /me
@jwt_required()
def me():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "user not found"}), 404
    return jsonify({"user": user_schema.dump(user)})
