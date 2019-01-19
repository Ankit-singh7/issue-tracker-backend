const express = require('express');
const router = express.Router();

const issuesController = require("../controllers/IssueController");
const appConfig = require("./../config/appConfig")

const authentication = require('./../middlewares/auth')


let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/issues`;

    app.post(`${baseUrl}/registerIssue`, authentication.isAuthorized, issuesController.registerIssue );

    /**
     * @apiGroup Issues
     * @apiVersion  1.0.0
     * @api {post}  http://api.toker.ml/api/v1/issues/registerIssue To register issue.
     *
     * @apiParam {string} issueId issueId of issue. (body params)
     * @apiParam {string} issueTitle Title of the issue. (body params)
     * @apiParam {string} reporterId ID of the reporter. (body params)
     * @apiParam {string} reporterName Name of the Reporter. (body params)
     * @apiParam {string} status Status of the issue. (body params)
     * @apiParam {string} description Breif Description of the issue. (body params)
     * @apiParam {string} attachments Array to store related attachments of issue. (body params)
     * @apiParam {string} assignee Assignee to whom reporter will assign his/her issue to fix. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                    {
                        "error": false,
                        "message": "Issue registered successfully",
                        "status": 200,
                        "data": {
                            "issueId": "CcvsI9xtn"
                            "issueTitle": "Ck editor not responding"
                            "reporterId": "eKOTSdkn7"
                            "reporterName": "Ankit Singh"
                            "status": "in-progress"
                            "description": "This is Test Description"
                            "assignee": "Ranveer Singh"
                            "comments": [],
                            "watchers": [],
                            "reportedOn": "2018-09-23T11:50:23.820Z"
                        }
                    }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "Failed to register issue",
                "status": 500,
                "data": null
            }
    */

    app.get(`${baseUrl}/allIssues`, authentication.isAuthorized , issuesController.getAllIssues);

    /**
         * @apiGroup Issues
         * @apiVersion  1.0.0
         * @api {get}  http://api.toker.ml/api/v1/issues/allIssues To get all Issues
         *
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
  
            {
                "error": false,
                "message": "All Issue Found",
                "status": 200,
                "data": [
                    {
                        "issueId": "pYd3NsrdB",
                        "issueTitle": "Angular app hosting",
                        "reporterId": "0uDHZaVDK",
                        "reporterName": "Ankit Singh",
                        "status": "in-test",
                        "description": "Dummy Description",
                        "comments": [],
                        "watchers": [],
                        "reportedOn": "2018-10-11T12:55:09.161Z",
                        "assignee": "Ranveer Singh"
                    },
                    {
                        "issueId": "Wl7Gfp2Ad",
                        "issueTitle": "Any issue",
                        "reporterId": "0uDHZaVDK",
                        "reporterName": "Ankit Singh",
                        "status": "in-progress",
                        "description": "Des-test",
                        "comments": [],
                        "watchers": [],
                        "reportedOn": "2018-10-11T12:55:09.161Z",
                        "assignee": "Ranveer Singh"
                    }
                ]
            }
    */    


    app.put(`${baseUrl}/:issueId/deleteIssue`, authentication.isAuthorized, issuesController.deleteIssue);


    /**
         * @apiGroup Issues
         * @apiVersion  1.0.0
         * @api {put}  http://api.toker.ml/api/v1/issues/:issueId/deleteIssue To delete single issue.
         *
         * @apiParam {string} issueId Issue ID of the issue. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Issue Deleted",
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
                "message": "No Issue Found",
                "status": 404,
                "data": null
            }
    */


    app.put(`${baseUrl}/:issueId/editIssue`, authentication.isAuthorized, issuesController.editIssue);


    /**
         * @apiGroup Issues
         * @apiVersion  1.0.0
         * @api {put}  http://api.toker.ml/api/v1/issues/:issueId/editIssue To edit single issue.
         *
         * @apiParam {string} issueId Issue ID of the issue. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Issue details edited/updated successfully",
                "status": 200,
                "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No Issue Found",
                "status": 404,
                "data": null
            }
    */


    app.get(`${baseUrl}/:issueId/getIssue`, authentication.isAuthorized , issuesController.getIssueByIssueId);

    /**
         * @apiGroup Issues
         * @apiVersion  1.0.0
         * @api {get}  http://api.toker.ml/api/v1/issues/:issueId/getIssue To get single issue details.
         *
         * @apiParam {string} issueId Issue ID of the issue. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Issue details found",
                "status": 200,
                "data": {
                    "issueId": "Wl7Gfp2Ad",
                    "issueTitle": "Test Issue",
                    "reporterId": "0uDHZaVDK",
                    "reporterName": "Ankit Singh",
                    "status": "in-progress",
                    "description": "Description-edited",
                    "comments": [],
                    "watchers": [],
                    "reportedOn": "2018-10-11T12:55:09.161Z",
                    "_id": "5bbfa299495b8a177cf4bc34",
                    "assignee": "Ranveer Singh",
                    "__v": 0
                }
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No Issue Found",
                "status": 404,
                "data": null
            }
    */




}// end of setRouter

module.exports = {
    setRouter: setRouter
}