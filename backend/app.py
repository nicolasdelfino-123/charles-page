from flask import Flask, jsonify
from flask_cors import CORS
from models import db

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mi_base.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/api/hola')
def hola():
    return jsonify({'mensaje': 'Hola desde Flask'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)