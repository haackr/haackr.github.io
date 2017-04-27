'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>{
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);
