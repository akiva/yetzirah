'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var bogan = require('boganipsum');
var jade = require('gulp-jade');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var autoprefix = require('gulp-autoprefixer');

gulp.task('clean', function() {
  return gulp.src(
    [
      './test/**/*.html',
      './test/**/*.css'
    ],
    { 'read': false }
  )
    .pipe(clean());
});

gulp.task('stylus', function() {
  gulp.src('./test/css/app.styl')
    .pipe(stylus())
    .pipe(autoprefix('last 1 version'))
    .pipe(gulp.dest('./test/css'))
    .pipe(connect.reload());
});

gulp.task('jade', function() {
  var LOCALS = { bogan: bogan };

  gulp.src('./test/**/*.jade')
    .pipe(jade({ locals: LOCALS }))
    .pipe(gulp.dest('./test/'))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    root: 'test',
    livereload: true
  });
});

gulp.task('watch', ['server'], function() {
  gulp.watch('**/*.styl', ['stylus']);
  gulp.watch('./test/*.jade', ['jade']);
});

gulp.task('dev', ['clean', 'stylus', 'jade', 'watch']);
