var oracleDriver = require('../lib/OracleDriver'),
	connection = oracleDriver.getConnection(),
	Comments = require('../models/Comments').getModel(),
	TipologyThread = require('../models/TipologyThread').getModel();


module.exports.getComments = function(contentId, callback) {
	// TipologyThread.findAll({
	// 	where: {
	// 		ctvId: contentId
	// 	}
	// }).then(function(comments) {
	// 	callback(null, comments);
	// }).catch(function(error) {
	// 	callback(error);
	// });


	connection.query('select * from comments').then(function(comments) {
		callback(null, comments);
	}).catch(function(error) {
		callback(error);
	});
};