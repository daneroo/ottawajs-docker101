var express = require('express');
var redis = require('redis');
var os = require('os');

var router = express.Router();
var hostname = os.hostname();

/* redis */
var client = redis.createClient({
    host: 'redis',
    // port: 6379, // default not necessary
});

var ready = false;
client.on("ready", function() {
    console.log('Connected to redis!');
    ready = true;
});
client.on("error", function(err) {
    // silently fail, so the app works without redis
    // console.log("Error " + err);
});

/* GET home page. */
var counter = 42;
router.get('/', function(req, res) {
    if (!ready) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            host: hostname,
            counter: counter++
        }));
    } else {
        client.incr('counter', function(err, result, next) {
            if (err) {
                return next(err);
            }
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                host: hostname,
                counter: result
            }));
        });
    }
});

module.exports = router;
