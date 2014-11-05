'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var bogan = require('boganipsum');
var jade = require('gulp-jade');
var del = require('del');
var webserver = require('gulp-webserver');
var autoprefix = require('gulp-autoprefixer');

gulp.task('clean:html', function() {
  del('./test/**/*.html');
});

gulp.task('clean:css', function() {
  del('./test/**/*.css');
});

gulp.task('stylus', ['clean:css'], function() {
  gulp.src('./test/css/app.styl')
    .pipe(stylus())
    .pipe(autoprefix('last 1 version'))
    .pipe(gulp.dest('./test/css'));
});

gulp.task('jade', ['clean:html'], function() {
  gulp.src('./test/**/*.jade')
    .pipe(jade({ locals: { bogan: bogan } }))
    .pipe(gulp.dest('./test'));
});

gulp.task('webserver', function() {
  gulp.src('./test')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('watch', ['default', 'webserver'], function() {
  gulp.watch('./**/*.styl', ['stylus']);
  gulp.watch('./test/*.jade', ['jade']);
});

gulp.task('default', ['stylus', 'jade']);
