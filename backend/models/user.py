"""User model.

Contains the `User` SQLAlchemy model and simple password helpers.
"""
from werkzeug.security import generate_password_hash, check_password_hash
from extensions import db


class User(db.Model):
    """Represents an application user.

    - `id`: primary key
    - `username`: unique display name
    - `email`: unique email address
    - `password_hash`: hashed password (never store plaintext)
    """

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    # Relationships (defined as strings to avoid circular imports)
    workspaces = db.relationship(
        "Workspace",
        backref="owner",
        lazy="dynamic",
        cascade="all, delete-orphan",
    )
    documents = db.relationship(
        "Document",
        backref="owner",
        lazy="dynamic",
        cascade="all, delete-orphan",
    )

    def set_password(self, password: str) -> None:
        """Hash and set the user's password."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        """Check a plaintext password against the stored hash."""
        return check_password_hash(self.password_hash, password)

    def to_dict(self) -> dict:
        """Return a JSON-serializable representation (safe for responses)."""
        return {"id": self.id, "username": self.username, "email": self.email}

    def __repr__(self) -> str:  # pragma: no cover - simple helper
        return f"<User id={self.id} username={self.username!r}>"
