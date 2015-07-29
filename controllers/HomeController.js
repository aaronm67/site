var deferred = require('deferred');
var RandomService = require('../services/RandomService');

module.exports = {
    main: function(req, res) {
        var service = new RandomService();
        var google = service.getGoogle();
        google.done(function(response) {
            res.send(response);
        });
    }
};