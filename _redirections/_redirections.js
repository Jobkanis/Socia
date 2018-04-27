module.exports = function(modules, configurations, classes, app, methods, context) {
    app.use(modules.express.static(modules.path.join(__dirname, '../public')));

    app.get('/', function(req, res) {
        res.render('pages/landing.ejs');
    })

    var login = require('./login')(modules, configurations, classes, app, methods, context);
};