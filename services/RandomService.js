var http = require('http');
var Deferred = require('deferred').Deferred;

function RandomService() { }

RandomService.prototype.getGoogle = function() {
    var deferred = new Deferred();
    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/'
    };

    return getResponse(options);
};

function getResponse(options) {
    var data = '';
    var deferred = new Deferred();
    var getReq = http.get(options, function(response) {
        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('error', function(e) {
            deferred.reject(e);
        });

        response.on('end', function() {
            deferred.resolve(data);
        });
    });

    return deferred.promise();
};

module.exports = RandomService;