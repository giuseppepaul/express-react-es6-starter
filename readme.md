Just a quick starter project for express / react projects using ES6. Just added a few more bits on top of this cool express boilerplate by developit found here: https://github.com/developit/express-es6-rest-api

## NPM tasks

**npm run build**

Compiles the ES6 JS files (and copies the non js files) from 'src/server/' to './dist/'

**npm run dev**

Watches the 'src/server/' folder for changes (nodemon) and runs build

**npm test**

Runs mocha unit tests

## Gulp tasks

**gulp js**

Compiles the front end js via webpack / babel - the react stuff

**gulp sass**

Compiles the sass - autoprefixer and sourcemaps on by default

**gulp dev**

Runs up 2 watch tasks that fire the sass/js tasks when appropriate

Everything gets compiled to a './dist/public/' folder
