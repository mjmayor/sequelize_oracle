var repository = require('../repository/TipologyThreadRepository');

module.exports.getComments = function(contentId, callback) {
	repository.getComments(contentId, callback);
};