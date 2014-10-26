var express = require('express');
var app = express();

app.disable('x-powered-by');


var handlers = require(process.DIR + '/lib/handlers');


app.get('/api/polls', handlers.get_polls);


app.listen(process.PORT);