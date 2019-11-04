const express = require('express');
const router  = express.Router();

// Import drivers
const home = require('../controllers/home');
const image = require('../controllers/image');

module.exports = app => {

  // Main route that routes all images
  router.get('/', home.index);

  // List a specific image
  router.get('/images/:image_id', image.index);

  // It is for theuser to upload images
  router.post('/images', image.create);

  // The user tries  to indicate that he likes an image
  router.post('/images/:image_id/like', image.like);

  //Comment on an image
  router.post('images/:image_id/comment', image.comment);
  
  // Delete an image
  router.delete('/images/:image_id/', image.remove);

  router.get('/', home.index);
  router.get('/', home.index);
  router.get('/', home.index);

  app.use(router);
}
