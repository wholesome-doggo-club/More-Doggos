const db = require('../database/index.js')

module.exports = {
	get: (req, res) => {
		db.getDoggos(8, (data) => {
			res.send(data);
		})
	},
	get2: (req, res) => {
		db.getADoggo((data) => {
			res.send(data);
		})
	}
}