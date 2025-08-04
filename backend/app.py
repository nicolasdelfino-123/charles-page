from flask import Flask, jsonify
from flask_cors import CORS
import scraping.yenny_selenium_scraper as scraper

app = Flask(__name__)
CORS(app)

@app.route("/api/mas-vendidos")
def mas_vendidos():
    libros = scraper.obtener_mas_vendidos()
    return jsonify(libros)

if __name__ == "__main__":
    app.run(debug=True)
