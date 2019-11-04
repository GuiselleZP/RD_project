const exphbs = require('express-handlebars');
// The path module allows to join directories
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const errorHandler = require('errorhandler');

const routes = require('../routes/index.js');

module.exports = app => {

  // Settings
  
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    // Functions that can be used within handlebars
    helpers: require('./helpers')
  }));
  app.set('view engine', '.hbs');

  // Middlewares
  
  // See by console, information about what the user is asking for.
  // 'dev' configuration will be used
  app.use((morgan('dev')));

  // All images uploaded are accessible to users
  app.use(multer({dest: path.join(__dirname, '../public/upload/temp')})
  // Number of images that can be uploaded at the time
    .single('image'));

  // Recive data from HTML forms
  app.use(express.urlencoded({extended: false}));

  // Likes management
  app.use(express.json());


  // Routes
  
  routes(app);
  
  //Static files
  
  app.use('/public', express.static(path.join(__dirname, '../public')));

  // errorhandlers
  
  if('development' == app.get('env')){
    app.use(errorHandler);
  }
  
  return app;
} 
