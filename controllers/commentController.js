const mongoose = require('mongoose');
const shortid = require('shortid');

//Libraries
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib');

//Models
const CommentModel = mongoose.model('CommentModel');


/**
 * function to add comment.
 */
let addComment = (req, res) => {

    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if(check.isEmpty(req.body.issueId) || check.isEmpty(req.body.userId) || check.isEmpty(req.body.userName)|| check.isEmpty(req.body.comment)) {
                logger.error('Parameters Missing', 'registerIssue:Validate Params()', 5);
                let apiResponse = response.generateResponse(true, 'parameters missing.', 403, null);
                reject(apiResponse)
            }
            else {
                resolve()
            }
        });
    }//end validate params


    //let imgPath = './public/images/test.jpg';

    let saveComment = () => {
        return new Promise((resolve, reject) => {

                let newComment = new CommentModel({
            
                    commentId : shortid.generate(),
                    issueId : req.body.issueId,
                    userId : req.body.userId,
                    userName:req.body.userName,
                    comment: req.body.comment            
                }) // end new Comment model

                newComment.save((err, result) => {

                    if (err) {
                        console.log(err)
                        logger.error(`Error occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Failed to add comment', 500, null)
                        res.send(apiResponse)
                    } else {
                      
                        console.log(result)
                        resolve(result)
                    
                    }

                }) // end new comment save

        })//end promise

        
    }//end

    
    validateParams()
        .then(saveComment)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Comment added', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            res.send(err)

        })


}//end addComment


/**
 * function to get all comments On issue.
 */
let getCommentsByIssueId = (req, res) => {

    if (check.isEmpty(req.params.issueId)) {
        logger.error("issueId is missing", "Comment Controller: getCommentsByIssueId", 10);
        let apiResponse = response.generate(true, "issueId is missing", 500, null);
        reject(apiResponse);
    }
    else {
        CommentModel.find({ issueId: req.params.issueId }, (err, commentDetails) => {

            /* handle the error if the user is not found */
            if (err) {
                logger.error('Failed to find comments', "Comment Controller: getCommentsByIssueId", 10);
                let apiResponse = response.generate(true, "failed to find the comment details", 500, null);
                res.send(apiResponse);
            }/* if company details is not found */
            else if (check.isEmpty(commentDetails)) {
                logger.error("No Comment Found", "Comment Controller: getCommentsByIssueId", 10);
                let apiResponse = response.generate(true, "No comment details Found", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Comments found", "Comment Controller: getCommentsByIssueId", 10);
                let apiResponse = response.generate(false, "Comment details found", 200, commentDetails);
                res.send(apiResponse);

            }

        });
    }

}//end getListByListId



module.exports = {

    addComment:addComment,
    getCommentsByIssueId:getCommentsByIssueId

}