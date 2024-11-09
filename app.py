from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')  # Home page

@app.route('/secure')
def secure():
    return render_template('secure.html')  # Secure communication page

@app.route('/encrypt')
def encrypt():
    return render_template('encrypt.html')  # Encrypt page

@app.route('/decrypt')
def decrypt():
    return render_template('decrypt.html')  # Decrypt page


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000 , debug=True)
