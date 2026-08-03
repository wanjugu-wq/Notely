"""Manage script to run Flask CLI commands in development.

Usage:
  export FLASK_APP=app.py
  flask db init/migrate/upgrade
"""

from app import create_app


app = create_app()


if __name__ == "__main__":
    app.run()
