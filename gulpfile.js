'use strict';

var gulp            = require('gulp');
var webpack         = require('webpack');
var gwebpack        = require('gulp-webpack');
var sass 			= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var sourcemaps 		= require('gulp-sourcemaps');
var config          = require('./webpack.config.js');

gulp.task('js', function (){
    return gulp.src('./src/client/js/entries/index.js')
            .pipe(gwebpack(config, webpack))
            .pipe(gulp.dest('./dist/public/js/bundles/'));
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

gulp.task('dev', function() {
	gulp.watch(['./src/client/js/**/*.js'], ['js']);
    gulp.watch(['./src/client/sass/**/*.scss'], ['sass'])
});

gulp.task('default', function() {
    gulp.run('js');
    gulp.run('sass');
});
