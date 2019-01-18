const express = require('express');
const userController=require('../controllers/userController');

const appConfig=require('../config/appConfig');
const auth = require("./../middlewares/auth")

let setRouter=(app) => {

  let baseUrl=`${appConfig.apiVersion}/users`;

  // params: firstName, lastName, email, password,mobile number,country
  app.post(`${baseUrl}/signup`, userController.signUpFunction);
  
    /**
     * @apiGroup Users
     * @apiVersion  1.0.0
     * @api {post} http://api.toker.ml/api/v1/users/signup To Signup user.
     *
     * @apiParam {string} firstName First name of the user. (body params)
     * @apiParam {string} lastName Last name of the user. (body params)
     * @apiParam {string} password Password of ToDo account. (body params)
     * @apiParam {string} email Email ID of the user. (body params)
     * @apiParam {number} mobileNumber Mobile number of the user. (body params)
     * @apiParam {string} country Country of the user. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                    {
                        "error": false,
                        "message": "User created",
                        "status": 200,
                        "data": {
                            "userId": "String",
                            "firstName": "String",
                            "lastName": "String",
                            "password": "String"
                            "email": "String",
                            "mobileNumber":"Number",
                            "country": "String"
                            "country": "String",
                            "createdOn": "Date",  
                            "modifiedOn": "Date"                                  
                            "_id": "5b816074f0fdc921608c6660",
                            "__v": 0
                        }
                    }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "Failed to create new User",
                "status": 500,
                "data": null
            }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "User Already Present With this Email",
                "status": 403,
                "data": null
            }
    */

  //params:mail,password
  app.post(`${baseUrl}/login`, userController.loginFunction);
  
    /**
         * @apiGroup Users
         * @apiVersion  1.0.0
         * @api {post} http://api.toker.ml/api/v1/users/login Login.
         *
         * @apiParam {string} email Email of the user. (body params) (required)
         * @apiParam {string} password Password of the user. (body params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
        
            {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "OiJIUzVCJ9DkxLXVuZGVmaW5W50cnkiOiJJTiIsInVzZXJWZXJpZmljYXRpb25TdGF0dXMiOnRydWUsInJlcXVlc3RzIjpbXSwiZnJpZW5kcyI6W3siZnJpZW5kSWQiOiJTS294WTYzZTUiLCJmcmllbmROYW1lIjoiUmFqdSBSYXN0b2dpIiwiYWN0.",
                "userDetails": {
                    "userId": "eKOTSdkn7",
                    "firstName": "Ankit",
                    "lastName": "Singh",
                    "email": "flywithme@gmail.com",
                    "mobileNumber": " 91-6786789024",
                    "country": "IN",
                
                }
            }
            }
        * @apiErrorExample {json} Error-Response:
        *
        *       {
                    "error": true,
                    "message": "Login Failed",
                    "status": 500,
                    "data": null
                }
        * @apiErrorExample {json} Error-Response:
            *
            *   {
                    "error": true,
                    "message": "Wrong Password.Login Failed",
                    "status": 400,
                    "data": null
                }
    */


  
  //params:authToken
  app.get(`${baseUrl}/all`,auth.isAuthorized,userController.getAllUser);
  /**
         * @apiGroup Users
         * @apiVersion  1.0.0
         * @api {get}  http://api.toker.ml/api/v1/users/all To get All users
         *
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "All User Details Found",
                "status": 200,
                "data": [
                    {
                        "userId": "eKOTSdkn7",
                        "firstName": "Ankit",
                        "lastName": "Singh",
                        "password": "$2b$10$fQHYrFiuqMhDkRZDOCWPeuRAu25vEDAmdTYOrFhw.3CSdSJS/GL2e",
                        "email": "flywithme@gmail.com",
                        "mobileNumber": " 91-5666789024",
                        "country": "IN",
                        "createdOn": "2018-09-19T06:40:15.000Z",
                        "modifiedOn": "2018-09-19T06:40:15.000Z"
                    },
                    ..........
                ]
            }
    */
  
   // params: userId.
  app.get(`${baseUrl}/view/:userId`,userController.getSingleUser);
  /**
         * @apiGroup Users
         * @apiVersion  1.0.0
         * @api {get}  http://api.toker.ml/api/v1/users/view/:userId To get details of user
         *
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "User Details Found",
                "status": 200,
                "data": {
                    "userId": "eKOTSdkn7",
                    "firstName": "Ankit",
                    "lastName": "Singh",
                    "email": "flywithme@gmail.com",
                    "mobileNumber": " 91-3677726882",
                    "country": "IN",
                    "createdOn": "2018-09-19T06:40:15.000Z",
                    "modifiedOn": "2018-09-19T06:40:15.000Z"
                }
            }
    */

   // params: userId.
  app.post(`${baseUrl}/:userId/delete`,auth.isAuthorized,userController.deleteUser);
  /**
         * @apiGroup Users
         * @apiVersion  1.0.0
         * @api {put}  http://api.toker.ml/api/v1/users/:userId/delete To delete single user.
         *
         * @apiParam {string} userId User ID of the user. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
                {
                    "error": false,
                    "message": "Deleted the user successfully",
                    "status": 200,
                    "data": {
                        "n": 1,
                        "ok": 1
                    }
                }
            * @apiErrorExample {json} Error-Response:
            *
                {
                    "error": true,
                    "message": "No User Found",
                    "status": 404,
                    "data": null
                }
    */



  app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

  /**
         * @apiGroup Users
         * @apiVersion  1.0.0
         * @api {post}  http://api.toker.ml/api/v1/users/logout Logout.
         *
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Logged Out Successfully",
                "status": 200,
                "data": null
            }                 
    */


   // params: email.
   app.post(`${baseUrl}/recovery-password`, userController. resetPasswordFunction );
    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post}  http://api.toker.ml/api/v1/users/recovery-password api for Password Reset.
    *
    * @apiParam {string} email email of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
       {
           "error": false,
           "message": "Password reset Successfully",
           "status": 200,
           "data": {
               "error": false,
               "message": "Password reset successfully",
               "status": 200,
               "data": {
                   "n": 1,
                   "nModified": 1,
                   "ok": 1
               }
           }
       }
   */


   
    // params: recoveryPassword,password.
   app.post(`${baseUrl}/update-password`,userController.updatePasswordFunction)
 /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post}  http://api.toker.ml/api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} recoveryPassword recoveryPassword of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": {
                "error": false,
                "message": "Password Updated successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
        }
    */


 
  }//end setRouter function


module.exports={
    setRouter:setRouter
}