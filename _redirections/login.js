module.exports = function(modules, configurations, classes, app, methods, context) {
    app.post('/register', function(req, res) {
        context.createRegularContext(context) {

        }
    })

    app.post('/login', function(req, res) {
        console.log(req.body);
    })
}