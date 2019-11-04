1. **Create the package.json file**
	
	It is a project metaconfiguration file. Thanks to this the program
	dependencies can be listed.

	```
	npm init --yes
	```	

1. **Install dependencies/modules**
	
	```
	npm install ...
	npm i express express-handlebars mongoose morgan multer fs-extra fs-extra errorhandler md5
	```

	1. **express**
		
		Node framework.
	
	1. **express-handlebars**
		
		HTML improved
	
	1. **mongoose**
		
		Connection driver. Allows data modeling.
	
	1. **morgan**
		
		Record user actions.
	
	1. **multer**
		
		Upload images from an HTML form to a server.
	
	1. **fs-extra**
	
	1. **errorhandler**
	
	1. **md5**
	
1. **Start mongodb service**
	
	```
	sudo service mongod start
	```

1. **Module to restart the server every time changes are made to the files**
	
	The '-D' option separates it from the dependency modules, since thus module
	is not essential for the application, it is only useful during the
	development process.

	```
	npm i nodemon -D
	```

	In the file 'package.json', in the section 'scripts', a new script called
	'dev' was created, this is executed by console as follows:

	```
	npm run dev
	```
	
	When executing this command, the 'nodemon src/index.js' command is 
	executed.
