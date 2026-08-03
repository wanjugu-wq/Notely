"""Workspace model.

Represents a collection of documents owned by a user.
"""
from extensions import db


class Workspace(db.Model):
    """Workspace owned by a `User` containing many `Document`s."""

    __tablename__ = "workspaces"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    documents = db.relationship(
        "Document",
        backref="workspace",
        lazy="dynamic",
        cascade="all, delete-orphan",
    )

    def to_dict(self):
        return {"id": self.id, "name": self.name, "owner_id": self.owner_id}

    def __repr__(self):  # pragma: no cover - helper
        return f"<Workspace id={self.id} name={self.name!r}>"
