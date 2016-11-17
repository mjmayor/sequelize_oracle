var properties = require('node-properties')('node-module-sequelize_oracle'),
	Sequelize = require('sequelize-oracle'),
	connection;

module.exports = {

	getConnection: function() {
		if (!connection) {
			connection = new Sequelize(properties.datasource.schema, properties.datasource.username, properties.datasource.password, {
				host: properties.datasource.host,
				port: properties.datasource.port,
				dialect: 'oracle',
				quoteIdentifiers: false, // Importante para Oracle
				pool: {
					max: properties.datasource.pool,
					min: properties.datasource.min,
					idle: properties.datasource.idle
				}
			});
		}
		return connection;
	}
};