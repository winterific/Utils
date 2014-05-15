var express = require('express'),
    swig = require('swig'),
    uuid = require('node-uuid'),
    strftime = require('strftime'),
    app = express(),
    DEBUG = process.env.DEBUG || false;

//app.use(express.cookieParser('8)Duifo34'));
//app.use(express.session());

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', DEBUG);
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: DEBUG });

app.locals.title = "Utilities";
app.locals.strftime = strftime;
app.locals.uuid = uuid;

app.use('/static', express.static(__dirname + '/static'));

app.use(function (err, req, res, next) {
    console.log(err);
    res.render('500', { title: "Error", error: err });
});

app.get('/', function (req, res, next) {
    res.render('index');
});

app.get('/*', function (req, res, next) {
    res.setStatus = 404;
    res.render('404', { title: "Page not found" });
});

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
