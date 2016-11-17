var properties = require('node-properties')('node-module-sequelize_oracle'),
	express = require('express'),
	path = require('path'),
	swig = require('swig');

// MIDDLEWARE
module.exports = express()
	.engine('html', swig.renderFile)
	.set('view engine', 'html')
	.set('views', path.join(__dirname, 'views'))
	.set('view cache', properties.view_cache)

// ROUTING AL MÓDULO EN SI
.use(/\/api/, require('./routes/TipologyThreadController'));