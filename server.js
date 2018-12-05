var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors())

require('./app/route/vaccine.route.js')(app);
require('./app/route/child.route.js')(app);
require('./app/route/vaccine-history.route.js')(app);

var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port)
})