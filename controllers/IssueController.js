const mongoose = require('mongoose');
const shortid = require('shortid');
const fs = require('fs')

//Libraries
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib');

//Models
const IssuesModel = mongoose.model('IssuesModel');


/**
 * function to register issue.
 */
let registerIssue = (req, res) => {

    let validateParams = () => {
        return new Promise((resolve, reject) => {
            if(check.isEmpty(req.body.issueTitle) || check.isEmpty(req.body.reporterId) || check.isEmpty(req.body.reporterName) || check.isEmpty(req.body.status) || check.isEmpty(req.body.attachments) ) {
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

    let saveIssue = () => {
        return new Promise((resolve, reject) => {

                let newIssue = new IssuesModel({
            
                    issueId : shortid.generate(),
                    issueTitle : req.body.issueTitle,
                    reporterId : req.body.reporterId,
                    reporterName: req.body.reporterName,
                    status: req.body.status,               
                    description: req.body.description,
                    attachments: req.body.attachments,
                    assignee:req.body.assignee || ' '           
                }) // end new list model

               


                newIssue.save((err, result) => {

                    if (err) {
                        console.log(err)
                        logger.error(`Error occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Failed to register issue', 500, null)
                        res.send(apiResponse)
                    } else {
                      
                        console.log(result)
                        resolve(result)
                    
                    }

                }) // end new product save

        })//end promise

        
    }//end

    
    validateParams()
        .then(saveIssue)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Issue registered successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            res.send(err)

        })


}//end registerIssue


/**
 * function to get All Issue.
 */
let getAllIssues = (req, res) => {
    IssuesModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(`Error occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Failed to find issues details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Isse Found', 'Issues Controller : getAllIssues')
                let apiResponse = response.generate(true, 'No issue Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info('All Issue Found', 'Issues Controller : getAllIssues')
                let apiResponse = response.generate(false, 'All Issue Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Issues



/**
 * function to delete issue using issueId.
 */
let deleteIssue = (req, res) => {

    IssuesModel.remove({ 'issueId': req.params.issueId }, (err, result) => {
        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Issue Found', 'Issues Controller : deleteIssue')
            let apiResponse = response.generate(true, 'No Issue Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info("Issue deleted", "Issues Controller : deleteIssue")
            let apiResponse = response.generate(false, 'Issue Deleted', 200, result)
            res.send(apiResponse)
        }
    })
}



/**
 * function to edit Issue deatails.
 */
let editIssue = (req, res) => {

    let options = req.body;
    console.log(options);
    console.log(req.params.issueId);
    IssuesModel.updateOne({ 'issueId': req.params.issueId },options , { multi: true }).exec((err, result) => {

        if (err) {
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to edit issue details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No issue details Found', 'Issues Controller : editIssue')
            let apiResponse = response.generate(true, 'No Issue Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Issue details edited/updated ', 'Issues Controller : editIssue')
            let apiResponse = response.generate(false, 'Issue details edited/updated successfully', 200, result)
            res.send(apiResponse)
        }
    })

}//end editIssue



/**
 * function to get single issue details.
 */
let getIssueByIssueId = (req, res) => {

    if (check.isEmpty(req.params.issueId)) {
        logger.error("issueId is missing", "Issues Controller: getIssueByIssueId", 10);
        let apiResponse = response.generate(true, "issueId is missing", 500, null);
        reject(apiResponse);
    }
    else {
        IssuesModel.findOne({ issueId: req.params.issueId }, (err, issueDetails) => {

            /* handle the error if the user is not found */
            if (err) {
                logger.error('Failed to find issue', "Issues Controller: getIssueByIssueId", 10);
                let apiResponse = response.generate(true, "failed to find the issue details", 500, null);
                res.send(apiResponse);
            }/* if company details is not found */
            else if (check.isEmpty(issueDetails)) {
                logger.error("No Item Found", "Issues Controller: getIssueByIssueId", 10);
                let apiResponse = response.generate(true, "No Issue details Found", 500, null);
                res.send(apiResponse);
            }
            else {
                logger.info("Issue found", "Issues Controller: getIssueByIssueId", 10);
                let apiResponse = response.generate(false, "Issue details found", 200, issueDetails);
                res.send(apiResponse);

            }

        });
    }

}//end getListByListId



module.exports = {

    registerIssue:registerIssue,
    getAllIssues:getAllIssues,
    deleteIssue:deleteIssue,
    editIssue:editIssue,
    getIssueByIssueId:getIssueByIssueId

}