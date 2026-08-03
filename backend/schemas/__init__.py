"""Schemas package initializer."""
from extensions import ma

try:
    from user_schema import UserSchema  # noqa: F401
    from workspace_schema import WorkspaceSchema  # noqa: F401
    from document_schema import DocumentSchema  # noqa: F401
except Exception:
    # Allow incremental creation without import errors
    pass

__all__ = ["ma", "UserSchema", "WorkspaceSchema", "DocumentSchema"]
