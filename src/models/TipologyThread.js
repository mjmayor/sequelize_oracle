var oracleDriver = require('../lib/OracleDriver'),
	Sequelize = require('sequelize-oracle'),
	connection = oracleDriver.getConnection(),
	TipologyThread;

module.exports.getModel = function() {
	TipologyThread = TipologyThread || connection.define('tipologythread', {
		ctvId: {
			type: Sequelize.INTEGER,
			field: 'ctvId'
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});

	return TipologyThread;
};