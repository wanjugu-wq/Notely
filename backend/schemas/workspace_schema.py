"""Marshmallow schema for Workspace model."""
from extensions import ma


class WorkspaceSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "owner_id")


workspace_schema = WorkspaceSchema()
workspaces_schema = WorkspaceSchema(many=True)
