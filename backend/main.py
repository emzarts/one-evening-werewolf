from flask import request
from flask import Flask

from game import Game

app = Flask(__name__)
app.run(host = '0.0.0.0',port=5005)

games = {}


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/create', methods=['POST'])
def create_game():
    name = request.form['name']
    characters = request.form['characters']
    newgame = Game(name,characters)
    gameid = newgame.get_id()
    games[gameid] = newgame
    return {'gameid': gameid}