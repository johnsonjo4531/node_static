# node_static
A simple static [Node](https://nodejs.org/) server built using [express](http://expressjs.com/) for serving local html and js files.

Just add files to public and start with `node server.js`

## JavaScript es6 and es7 support
Run [Gulp](http://gulpjs.com/)'s default task by running `gulp` on your command line and all files ending with `-es6.js` in your /public/assets/js path will be watched for changes and your `-es6.js` files in will be run through [Babel](http://babeljs.io/) in order to transpile them to es5.
