var oracleDriver = require('../lib/OracleDriver'),
	Sequelize = require('sequelize-oracle'),
	connection = oracleDriver.getConnection(),
	Comments;

module.exports.getModel = function() {
	Comments = Comments || connection.define('comments', {
		comentario: {
			type: Sequelize.STRING,
			field: 'comentario'
		},
	}, {
		freezeTableName: true,
		timestamps: false
	});

	return Comments;
};