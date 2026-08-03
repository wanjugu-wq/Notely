"""Document model.

Represents a document/page inside a workspace. Supports tree structure via
`parent_id` self-reference.
"""
from datetime import datetime
from extensions import db


class Document(db.Model):
    __tablename__ = "documents"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=True)
    icon = db.Column(db.String(255), nullable=True)
    cover_image = db.Column(db.String(255), nullable=True)

    parent_id = db.Column(db.Integer, db.ForeignKey("documents.id"), nullable=True)
    children = db.relationship(
        "Document",
        backref=db.backref("parent", remote_side=[id]),
        lazy="dynamic",
        cascade="all, delete-orphan",
    )

    workspace_id = db.Column(db.Integer, db.ForeignKey("workspaces.id"), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    is_archived = db.Column(db.Boolean, default=False, nullable=False)
    is_published = db.Column(db.Boolean, default=False, nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "icon": self.icon,
            "cover_image": self.cover_image,
            "parent_id": self.parent_id,
            "workspace_id": self.workspace_id,
            "owner_id": self.owner_id,
            "is_archived": self.is_archived,
            "is_published": self.is_published,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }

    def __repr__(self):  # pragma: no cover - helper
        return f"<Document id={self.id} title={self.title!r}>"
