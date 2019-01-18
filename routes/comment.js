const express = require('express');
const router = express.Router();

const commentController = require("./../controllers/commentController");
const appConfig = require("../config/appConfig")

const authentication = require('../middlewares/auth')


let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/comments`;

    app.post(`${baseUrl}/addComment`, authentication.isAuthorized, commentController.addComment );

    /**
     * @apiGroup Comments APIs
     * @apiVersion  1.0.0
     * @api {post}  http://api.toker.ml/api/v1/comments/addComment To add comment.
     *
     * @apiParam {string} issueId issueId of issue. (body params)
     * @apiParam {string} userId ID of user. (body params)
     * @apiParam {string} userName Name of the User. (body params)
     * @apiParam {string} comment Comment of user. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                    {
                        "error": false,
                        "message": "Comment added",
                        "status": 200,
                        "data": {
                            "issueId": "CcvsI9xtn"
                            "userId": "eKOTSdkn7"
                            "userName": "Ankit Singh"
                            "comment": "Dummy text comment"
                            "commentedOn": "2018-09-23T11:50:23.820Z"
                        }
                    }
        * @apiErrorExample {json} Error-Response:
        *
            {
                "error": true,
                "message": "Failed to add comment",
                "status": 500,
                "data": null
            }
    */

    app.get(`${baseUrl}/:issueId/getCommentsOnIssue`, authentication.isAuthorized , commentController.getCommentsByIssueId);

    /**
         * @apiGroup Comments
         * @apiVersion  1.0.0
         * @api {get}  http://api.toker.ml/api/v1/comments/:issueId/getCommentsOnIssue To get all comments on issue.
         *
         * @apiParam {string} issueId Issue ID of the issue. (route params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
            {
                "error": false,
                "message": "Comment details found",
                "status": 200,
                "data": [
                    {
                        "commentId": "cMeUUHJZs",
                        "issueId": "Wl7Gfp2Ad",
                        "userId": "0uDHZaVDK",
                        "userName": "Ankit Singh",
                        "comment": "Text Comment1",
                        "commentedOn": "2018-10-11T12:55:09.137Z",
                        "_id": "5bbfa969495b8a177cf4bc35",
                        "__v": 0
                    },
                    {
                        "commentId": "rkT0BbzSM",
                        "issueId": "Wl7Gfp2Ad",
                        "userId": "0uDHZaVDK",
                        "userName": "Ankit Singh",
                        "comment": "Text Comment2",
                        "commentedOn": "2018-10-11T12:55:09.137Z",
                        "_id": "5bbfa978495b8a177cf4bc36",
                        "__v": 0
                    }
                ]
            }
         * @apiErrorExample {json} Error-Response:
         *
            {
                "error": true,
                "message": "No comment details Found",
                "status": 500,
                "data": null
            }
    */





}// end of setRouter

module.exports = {
    setRouter: setRouter
}