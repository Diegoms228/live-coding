import jwt
from flask import request, jsonify, current_app
from functools import wraps

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization")

        if not auth_header:
            return jsonify({"error": "Token requerido"}), 401

        try:
            token = auth_header.split(" ")[1]
            data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
        except:
            return jsonify({"error": "Token inválido"}), 403

        return f(data, *args, **kwargs)

    return decorated