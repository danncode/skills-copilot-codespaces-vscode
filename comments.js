// create web server

// import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { catchErrors } = require('../handlers/errorHandlers');

// routes
router.get('/', catchErrors(commentController.getComments));
router.get('/:id', catchErrors(commentController.getComment));
router.post('/', catchErrors(commentController.createComment));
router.put('/:id', catchErrors(commentController.updateComment));
router.delete('/:id', catchErrors(commentController.deleteComment));
