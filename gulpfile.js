'use strict';

var gulp            = require('gulp');
var webpack         = require('webpack');
var gwebpack        = require('gulp-webpack');
var babel           = require('gulp-babel');
var clean           = require('gulp-clean');
var sass 			= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var sourcemaps 		= require('gulp-sourcemaps');
var config          = require('./webpack.config.js');

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('copy_server_src', function (){
    return gulp
            .src(['!./src/server/**/*.js', './src/server/**/*'])
            .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
	return gulp
		.src('./src/client/sass/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer('last 10 versions'))
		.pipe(gulp.dest('./dist/public/css/'));
});

gulp.task('compile_server_js', function (){
    return gulp
        .src('./src/server/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('compile_client_js', function (){
    return gulp.src('./src/client/js/entries/index.js')
            .pipe(gwebpack(config, webpack))
            .pipe(gulp.dest('./dist/public/js/bundles/'));
});

gulp.task('sbuild', function (){
    gulp.run(['compile_server_js', 'copy_server_src']);
});

gulp.task('cbuild', function (){
    gulp.run(['sass', 'compile_client_js']);
});

gulp.task('dev', function() {
    // Client side / React code for webpacking
	gulp.watch(['./src/client/js/**/*.js'], ['compile_client_js']);
    // SASS
    gulp.watch(['./src/client/sass/**/*.scss'], ['sass']);
    // JS server files
    gulp.watch(['./src/server/**/*.js'], ['compile_server_js']);
    // Non JS server files
    gulp.watch(['!./src/server/**/*.js', './src/server/**/*'], ['copy_server_src']);
});

gulp.task('default', function() {
    gulp.run(['sbuild', 'cbuild']);
});
