"""Seed script to populate the database with demo data.

Run this after migrations are applied. It creates a demo user, a workspace,
and a sample document for quick frontend integration.
"""
from app import create_app
from extensions import db
from models.user import User
from models.workspace import Workspace
from models.document import Document


def run():
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()

        if User.query.filter_by(email="michelle.wanjugu@student.moringaschool.com").first():
            print("Demo data already exists")
            return

        user = User(username="cugu", email="michelle.wanjugu@student.moringaschool.com")
        user.set_password("password")
        db.session.add(user)
        db.session.commit()

        ws = Workspace(name="Demo Workspace", owner_id=user.id)
        db.session.add(ws)
        db.session.commit()

        doc = Document(title="Welcome", content="This is a seeded document.", workspace_id=ws.id, owner_id=user.id)
        db.session.add(doc)
        db.session.commit()

        print("Seed data created")


if __name__ == "__main__":
    run()
