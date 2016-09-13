Just a quick starter project for express / react projects using ES6 / Babel and various gulp tasks for building.

## Running the server

You should use nodemon to monitor the dist folder:

```javascript
npm install -g nodemon
```

Once you have installed nodemon and built using the gulp tasks below just cd to the dist folder and run the server up via nodemon:

```javascript
nodemon server.js
```

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
