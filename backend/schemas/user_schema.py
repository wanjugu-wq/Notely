"""Marshmallow schema for User model."""
from extensions import ma


class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose when serializing
        fields = ("id", "username", "email")


user_schema = UserSchema()
users_schema = UserSchema(many=True)
