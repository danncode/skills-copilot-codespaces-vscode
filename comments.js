// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Comments data
const comments = {
  1: [
    {
      id: 1,    // Unique identifier
        body: 'First comment', // Comment body
        postId: 1, // Belongs to post with id 1
    },
    {
      id: 2,
        body: 'Second comment',
        postId: 1,
    },
    ],

