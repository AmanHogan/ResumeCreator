from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/pythonFile', methods=['GET'])

def run_python():
    resp = jsonify(success=True)    
    print('Got here')
    return resp

if __name__ == '__main__':
    app.run(debug=True)