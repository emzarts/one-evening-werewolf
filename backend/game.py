import random

class Game:
	def __init__(self, name, characters):
		id = random.randrange(0,99999)
		self.id = str(id).zfill(5)
		self.characters = {}
		self.owner = name
		self.players = []

	def addPlayer(self, name):
		self.players.append(name)

	def get_id(self):
		return self.id