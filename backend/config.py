import os
from datetime import timedelta

# Base directory of the backend package
BASE_DIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    """Base configuration with sensible defaults for development.

    Environment variables can override these values in production.
    """
    SECRET_KEY = os.environ.get("SECRET_KEY", "dev-secret-key")
    # Use SQLite by default for easy local development. To use PostgreSQL
    # or another DB in production, set the DATABASE_URL environment variable.
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL", f"sqlite:///{os.path.join(BASE_DIR, 'dev.db')}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT config
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "jwt-secret-key")
    # Access tokens expire in 7 days by default
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(days=7)


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    DEBUG = False
