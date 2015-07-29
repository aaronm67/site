var HomeController = require('./controllers/HomeController');

module.exports = {
    init: function(app) {
        app.get('/', new HomeController().main);
    }
};