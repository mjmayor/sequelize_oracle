var properties = require('node-properties')('node-module-sequelize_oracle'),
    express = require('express'),
    router = express.Router();

var service = require('../services/TipologyThreadService.js');

var urlPattern = /\/noticias\/(\d+)\/comentarios/;
router.get(urlPattern, function(req, res) {
    var regExp = new RegExp(urlPattern),
        coincidences = regExp.exec(req.url),
        contentId = parseInt(coincidences[1]);

    service.getComments(contentId, function(error, data) {
        output({
            req: req,
            res: res,
            error: error,
            data: data,
            template: 'alumnos/listSql'
        });
    });
});

function output(args) {
    if (args.error) {
        args.res.render('error', {
            error: args.error
        });
    } else {

        args.res.format({
            'application/json': function() {
                args.res.send(args.data);
            },

            'default': function() {
                args.res.status(406).send('Not Acceptable');
            }
        });
    }
}

module.exports = router;