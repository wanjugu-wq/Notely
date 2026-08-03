"""Marshmallow schema for Document model."""
from extensions import ma
from marshmallow import fields


class DocumentSchema(ma.Schema):
    parent = fields.Nested("self", only=("id", "title"), default=None)

    class Meta:
        fields = (
            "id",
            "title",
            "content",
            "icon",
            "cover_image",
            "parent_id",
            "workspace_id",
            "owner_id",
            "is_archived",
            "is_published",
            "created_at",
            "updated_at",
        )


document_schema = DocumentSchema()
documents_schema = DocumentSchema(many=True)
