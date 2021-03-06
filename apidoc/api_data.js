define({ "api": [
  {
    "group": "Comments",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.toker.ml/api/v1/comments/:issueId/getCommentsOnIssue",
    "title": "To get all comments on issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment details found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"commentId\": \"cMeUUHJZs\",\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Ankit Singh\",\n            \"comment\": \"Text Comment1\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa969495b8a177cf4bc35\",\n            \"__v\": 0\n        },\n        {\n            \"commentId\": \"rkT0BbzSM\",\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"userId\": \"0uDHZaVDK\",\n            \"userName\": \"Ankit Singh\",\n            \"comment\": \"Text Comment2\",\n            \"commentedOn\": \"2018-10-11T12:55:09.137Z\",\n            \"_id\": \"5bbfa978495b8a177cf4bc36\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No comment details Found\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comment.js",
    "groupTitle": "Comments",
    "name": "GetHttpApiTokerMlApiV1CommentsIssueidGetcommentsonissue"
  },
  {
    "group": "Comments_APIs",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/comments/addComment",
    "title": "To add comment.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the User. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment of user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Comment added\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"CcvsI9xtn\"\n        \"userId\": \"eKOTSdkn7\"\n        \"userName\": \"Ankit Singh\"\n        \"comment\": \"Dummy text comment\"\n        \"commentedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to add comment\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comment.js",
    "groupTitle": "Comments_APIs",
    "name": "PostHttpApiTokerMlApiV1CommentsAddcomment"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.toker.ml/api/v1/issues/allIssues",
    "title": "To get all Issues",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All Issue Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"issueId\": \"pYd3NsrdB\",\n            \"issueTitle\": \"Angular app hosting\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Ankit Singh\",\n            \"status\": \"in-test\",\n            \"description\": \"Dummy Description\",\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Ranveer Singh\"\n        },\n        {\n            \"issueId\": \"Wl7Gfp2Ad\",\n            \"issueTitle\": \"Any issue\",\n            \"reporterId\": \"0uDHZaVDK\",\n            \"reporterName\": \"Ankit Singh\",\n            \"status\": \"in-progress\",\n            \"description\": \"Des-test\",\n            \"comments\": [],\n            \"watchers\": [],\n            \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n            \"assignee\": \"Ranveer Singh\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/IssueRoute.js",
    "groupTitle": "Issues",
    "name": "GetHttpApiTokerMlApiV1IssuesAllissues"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.toker.ml/api/v1/issues/:issueId/getIssue",
    "title": "To get single issue details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue details found\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"Wl7Gfp2Ad\",\n        \"issueTitle\": \"Test Issue\",\n        \"reporterId\": \"0uDHZaVDK\",\n        \"reporterName\": \"Ankit Singh\",\n        \"status\": \"in-progress\",\n        \"description\": \"Description-edited\",\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-10-11T12:55:09.161Z\",\n        \"_id\": \"5bbfa299495b8a177cf4bc34\",\n        \"assignee\": \"Ranveer Singh\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/IssueRoute.js",
    "groupTitle": "Issues",
    "name": "GetHttpApiTokerMlApiV1IssuesIssueidGetissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/issues/registerIssue",
    "title": "To register issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueTitle",
            "description": "<p>Title of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterId",
            "description": "<p>ID of the reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Name of the Reporter. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Breif Description of the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "attachments",
            "description": "<p>Array to store related attachments of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": "<p>Assignee to whom reporter will assign his/her issue to fix. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue registered successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"issueId\": \"CcvsI9xtn\"\n        \"issueTitle\": \"Ck editor not responding\"\n        \"reporterId\": \"eKOTSdkn7\"\n        \"reporterName\": \"Ankit Singh\"\n        \"status\": \"in-progress\"\n        \"description\": \"This is Test Description\"\n        \"assignee\": \"Ranveer Singh\"\n        \"comments\": [],\n        \"watchers\": [],\n        \"reportedOn\": \"2018-09-23T11:50:23.820Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to register issue\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/IssueRoute.js",
    "groupTitle": "Issues",
    "name": "PostHttpApiTokerMlApiV1IssuesRegisterissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.toker.ml/api/v1/issues/:issueId/deleteIssue",
    "title": "To delete single issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue Deleted\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/IssueRoute.js",
    "groupTitle": "Issues",
    "name": "PutHttpApiTokerMlApiV1IssuesIssueidDeleteissue"
  },
  {
    "group": "Issues",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.toker.ml/api/v1/issues/:issueId/editIssue",
    "title": "To edit single issue.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>Issue ID of the issue. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Issue details edited/updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Issue Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/IssueRoute.js",
    "groupTitle": "Issues",
    "name": "PutHttpApiTokerMlApiV1IssuesIssueidEditissue"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.toker.ml/api/v1/users/all",
    "title": "To get All users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"eKOTSdkn7\",\n            \"firstName\": \"Ankit\",\n            \"lastName\": \"Singh\",\n            \"password\": \"$2b$10$fQHYrFiuqMhDkRZDOCWPeuRAu25vEDAmdTYOrFhw.3CSdSJS/GL2e\",\n            \"email\": \"flywithme@gmail.com\",\n            \"mobileNumber\": \" 91-5666789024\",\n            \"country\": \"IN\",\n            \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n            \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n        },\n        ..........\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "GetHttpApiTokerMlApiV1UsersAll"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "http://api.toker.ml/api/v1/users/view/:userId",
    "title": "To get details of user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"eKOTSdkn7\",\n        \"firstName\": \"Ankit\",\n        \"lastName\": \"Singh\",\n        \"email\": \"flywithme@gmail.com\",\n        \"mobileNumber\": \" 91-3677726882\",\n        \"country\": \"IN\",\n        \"createdOn\": \"2018-09-19T06:40:15.000Z\",\n        \"modifiedOn\": \"2018-09-19T06:40:15.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "GetHttpApiTokerMlApiV1UsersViewUserid"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/users/login",
    "title": "Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\"error\": false,\n\"message\": \"Login Successful\",\n\"status\": 200,\n\"data\": {\n    \"authToken\": \"OiJIUzVCJ9DkxLXVuZGVmaW5W50cnkiOiJJTiIsInVzZXJWZXJpZmljYXRpb25TdGF0dXMiOnRydWUsInJlcXVlc3RzIjpbXSwiZnJpZW5kcyI6W3siZnJpZW5kSWQiOiJTS294WTYzZTUiLCJmcmllbmROYW1lIjoiUmFqdSBSYXN0b2dpIiwiYWN0.\",\n    \"userDetails\": {\n        \"userId\": \"eKOTSdkn7\",\n        \"firstName\": \"Ankit\",\n        \"lastName\": \"Singh\",\n        \"email\": \"flywithme@gmail.com\",\n        \"mobileNumber\": \" 91-6786789024\",\n        \"country\": \"IN\",\n    \n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n              \"error\": true,\n              \"message\": \"Login Failed\",\n              \"status\": 500,\n              \"data\": null\n          }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n                  \"error\": true,\n                  \"message\": \"Wrong Password.Login Failed\",\n                  \"status\": 400,\n                  \"data\": null\n              }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiTokerMlApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/users/logout",
    "title": "Logout.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiTokerMlApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/users/signup",
    "title": "To Signup user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of ToDo account. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email ID of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"String\",\n        \"firstName\": \"String\",\n        \"lastName\": \"String\",\n        \"password\": \"String\"\n        \"email\": \"String\",\n        \"mobileNumber\":\"Number\",\n        \"country\": \"String\"\n        \"country\": \"String\",\n        \"createdOn\": \"Date\",  \n        \"modifiedOn\": \"Date\"                                  \n        \"_id\": \"5b816074f0fdc921608c6660\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create new User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"User Already Present With this Email\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PostHttpApiTokerMlApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "http://api.toker.ml/api/v1/users/:userId/delete",
    "title": "To delete single user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No User Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "Users",
    "name": "PutHttpApiTokerMlApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/users/recovery-password",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password reset successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostHttpApiTokerMlApiV1UsersRecoveryPassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "http://api.toker.ml/api/v1/users/update-password",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recoveryPassword",
            "description": "<p>recoveryPassword of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"error\": false,\n        \"message\": \"Password Updated successfully\",\n        \"status\": 200,\n        \"data\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoute.js",
    "groupTitle": "users",
    "name": "PostHttpApiTokerMlApiV1UsersUpdatePassword"
  }
] });
