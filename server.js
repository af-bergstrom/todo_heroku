var arkansas = require('arkansas/server')
  , app = arkansas.app
  , express = arkansas.express

app.configure(function() {
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.use(express.favicon())
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(require('less-middleware')({ src: __dirname + '/assets' }))
  app.use(express.static(__dirname + '/assets'))
})

app.configure('development', function() {
  app.use(express.errorHandler())
  // app.use(express.logger('dev'))
})

arkansas.init(__dirname + '/app')

// API
var couchdbAdapter = require('./couchdb-adapter')
couchdbAdapter.createApiFor(require('./models/todo'))

var server = module.exports = require('http').createServer(app)

server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'))
})