var express = require('express'),
    swig = require('swig'),
    uuid = require('node-uuid'),
    app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('view cache', false);
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(function (err, req, res, next) {
    console.log(err);
    res.render('500', { title: "Error", error: err });
});

app.get('/', function (req, res, next) {
    res.render('index', { title: "Utilities", uuid: uuid.v4() });
});

app.get('/*', function (req, res, next) {
    res.setStatus = 404;
    res.render('404', { title: "Page not found" });
});

var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("Listening on port: " + port);
});


