var deferred = require('deferred');
var RandomService = require('../services/RandomService');

function HomeController() { }

// Serves the site homepage
HomeController.prototype.main = function(req, res) {
    var service = new RandomService();
    var google = service.getGoogle();
    google.done(function(response) {
        res.send(response);
    });
};

module.exports = HomeController;