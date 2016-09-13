Just a quick starter project for express / react projects using ES6. Just added a few more bits on top of this cool express boilerplate by developit found here: https://github.com/developit/express-es6-rest-api

## Gulp tasks

**gulp (default)**

Builds and saves everything to the dist folder

**gulp dev**

Starts a bunch of watch tasks that monitor server and client side JS and SASS files, compiling when changed.

**gulp clean**
Clears out the dist folder

**gulp compile_server_js**

Compiles the ES6 server js files and saves to the dist folder

**gulp compile_client_js**

Compiles the JS (react stuff) from the client folder and saves to dist

**gulp copy_server_src**

Copies the non JS server files to the dist directory

**gulp sass**

Compiles the sass - autoprefixer and sourcemaps on by default
