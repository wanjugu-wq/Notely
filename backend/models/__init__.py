"""Models package initializer.

This module ensures the SQLAlchemy `db` object is available to model
modules and provides a central place to import model classes.
"""
from extensions import db

# Import model classes here so other modules can do `from models import User`
# Model files will populate these names when created.
try:
    from user import User  # noqa: F401
    from workspace import Workspace  # noqa: F401
    from document import Document  # noqa: F401
except Exception:
    # During initial scaffold the model files may not exist yet; ignore
    # import errors to allow incremental creation.
    pass

__all__ = ["db", "User", "Workspace", "Document"]
