const db = require('../database/index.js')

module.exports = {
	get: (req, res) => {
		db.getDoggos(100, (data) => {
			res.send(data);
		})
	}
}