"""Initialize Flask extensions used across the application.

Keeping extension instances in a central module allows other modules
to import them without creating circular imports.
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
from flask_cors import CORS

# SQLAlchemy database instance
db = SQLAlchemy()

# Flask-Migrate (alembic) integration
migrate = Migrate()

# Marshmallow instance for schema (de)serialization
ma = Marshmallow()

# JWT manager for authentication
jwt = JWTManager()

# CORS helper; configure in `app.py` when initializing the app
cors = CORS()


def init_extensions(app):
    """Initialize all extensions with the Flask app.

    Call this early in application factory or in `app.py` after creating
    the Flask app object.
    """
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    jwt.init_app(app)
    # Allow cross-origin requests by default for development. In production
    # restrict origins appropriately via config or environment variables.
    cors.init_app(app, resources={r"/*": {"origins": "*"}})
