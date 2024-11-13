import os
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Проверка существования папки templates и файла index.html
templates_path = os.path.join(os.getcwd(), 'templates')
index_file = os.path.join(templates_path, 'index.html')

if not os.path.exists(templates_path):
    print(f"Папка templates не найдена: {templates_path}")

if not os.path.exists(index_file):
    print(f"Файл index.html не найден: {index_file}")

# Частоты нот от A2 до D#4
note_frequencies = {
    'A2': 110.00,
    'A#2/Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3/Db3': 138.59,
    'D3': 146.83,
    'D#3/Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3/Gb3': 185.00,
    'G3': 196.00,
    'G#3/Ab3': 207.65,
    'A3': 220.00,
    'A#3/Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/frequencies', methods=['GET'])
def get_frequencies():
    return jsonify(note_frequencies)

if __name__ == '__main__':
    app.run(debug=True)