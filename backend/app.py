"""Application entrypoint and factory.

Creates the Flask app, initializes extensions, and registers blueprints.
"""
import os
from flask import Flask, jsonify
from dotenv import load_dotenv

# Load environment variables from backend/.env if present
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

from config import DevelopmentConfig
from extensions import init_extensions, db, migrate


def create_app(config_object=None):
    app = Flask(__name__)
    # Load configuration from object or default to DevelopmentConfig
    app.config.from_object(config_object or DevelopmentConfig)

    # Initialize extensions
    init_extensions(app)

    # Register blueprints
    from routes.auth import auth_bp
    from routes.workspaces import workspaces_bp
    from routes.documents import documents_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(workspaces_bp)
    app.register_blueprint(documents_bp)

    @app.route("/healthz")
    def healthz():
        return jsonify({"status": "ok"})

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
    
# PIPENV_PIPFILE=backend/Pipfile pipenv run python -m backend.app