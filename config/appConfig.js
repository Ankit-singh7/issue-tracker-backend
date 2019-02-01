const express = require('express');
let appConfig={};

appConfig.port = 3001;

appConfig.allowedCorsOrigin="*";

appConfig.env="dev";

appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/issueTrackerDB',

}

appConfig.apiVersion = '/api/v1';


 module.exports={


    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion






 }//end module exports


