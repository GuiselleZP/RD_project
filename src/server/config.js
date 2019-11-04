const exphbs = require('express-handlebars');
// The path module allows to join directories
const path = require('path');
module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.engine('.hbs', exphbs({
    defaultLayout: 'main'
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    // Functions that can be used within handlebars
    helpers: require('./helpers')
  }));
  app.set('view engine', '.hbs');

  // Middlewares
  
  // Routes
  
  // errorhandlers
  

  return app;
} 
