'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass({
      // outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('default', function () {
  gulp.run(['sass']);
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});
