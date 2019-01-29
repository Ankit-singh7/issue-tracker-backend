
const express = require('express')
const mongoose = require('mongoose');

const appConfig = require('./config/appConfig')
const fs = require('fs')
const http = require('http')

//importing the body-parser for fetching 
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

//middlewares
//const helmet = require('helmet');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');
const routeLogger = require('./middlewares/routeLogger');

const logger = require('./libs/loggerLib')

//declaring an instance or creating an application instance
const app = express()


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});


//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
//app.use(helmet());

app.use(globalErrorMiddleware.globalErrorHandler);
app.use(routeLogger.logIp);

// Bootstrap models
let modelsPath = './models'
console.log(modelsPath)
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(file)
        require(modelsPath + '/' + file)
    }
  })
// end Bootstrap models

// Bootstrap route
let routesPath = './routes'
console.log(routesPath)
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
}); // end bootstrap route

app.use(globalErrorMiddleware.globalNotFoundHandler);


//creating http Server
const server = http.createServer(app);

//start listening to the http server

server.listen(appConfig.port);
server.on('error',onError);
server.on('listening',onListening);

//end server listening code

const socketLib = require('./libs/socketLib');
const socketServer = socketLib.setServer(server);



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
    throw error;
  }


  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    default:
      logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  ('Listening on ' + bind);
  logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
  let db = mongoose.connect(appConfig.db.uri , { useNewUrlParser: true });
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});




// handling mongoose connection error
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)

}); // end mongoose connection error




// handling mongoose success event
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);

    } else {
        console.log("database connection open success");
    }

}); // end mongoose connection open handler