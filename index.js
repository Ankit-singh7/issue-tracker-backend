
//this is needed for importing expressjs into our application
const express = require('express');
const appConfig=require('./config/appConfig');
const  fs = require('fs');
const jwt = require('jsonwebtoken');
const http=require('http');
const mongoose = require('mongoose');
const globalErrorMiddleware=require('./middlewares/appErrorHandler')
const routeLoggerMiddleware=require('./middlewares/routeLogger')
const logger=require('./libs/loggerLib');
//this two library are for doing post request and they are application level middleware
//we have to include app level middle ware inside index.js file
//route level middleware are include inside the route only
//we have to use npm install for including cookieParser &body parser
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const session=require('express-session');
var nodemailer = require('nodemailer');



//helmet is another application level middleware which is use to hide unnecessary information which comes in header that are 
//bad in context of security
var helmet =require('helmet')


//declaring an instance or creating an application instance
const app = express();



//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    secret:'this is the secret',
    resolve:true,
    saveUninitialized:true
}));

app.use(cookieParser());

app.use( globalErrorMiddleware. globalErrorHandler);



app.use(routeLoggerMiddleware.logIp);
app.use(helmet());
app.use(morgan('dev'));



let modelsPath='./models'
fs.readdirSync(modelsPath).forEach(function(file)
{
    if(~file.indexOf('.js'))
    {
        require(modelsPath+'/'+file)
    }
});


 let routesPath = './routes';
 
 fs.readdirSync(routesPath).forEach(function (file)
 {
     if(~file.indexOf('.js'))
     {
         console.log("including the following file");
         console.log(routesPath+'/'+file);
         let route =require(routesPath+ '/' +file);
         route.setRouter(app);
     }
 });//end bootstrap route

 app.use( globalErrorMiddleware. globalNotFoundHandler)



 //creating HTTP server
 const server=http.createServer(app)
//starting listening to http server required by socket
 console.log(appConfig);
 server.listen(appConfig.port);
 server.on('error',onError)
 server.on('listening',onListening);
//end server listening code

//socket.io connection handler
const socketLib = require("./libs/socketLib");
const socketServer = socketLib.setServer(server);
//end of socket.io connection handler


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
     mongoose.connect(appConfig.db.uri,{ useNewUrlParser: true,diagnosticDataCollectionEnabled: false });
  }
  
  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
  });




/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)
    logger.error(err,
      'mongoose connection on error handler', 10)
    //process.exit(1)
  }); // end mongoose connection error
  
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log("database error");
      console.log(err);
      logger.error(err, 'mongoose connection open handler', 10)
    } else {
      console.log("database connection open success");
      logger.info("database connection open",
        'database connection open handler', 10)
    }
    //process.exit(1)
  }); // enr mongoose connection open handler
  
  
  
  // end socketio connection handler
  
  
  
  module.exports = app;
  


