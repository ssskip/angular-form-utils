var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('build', function () {
  return gulp.src('src/*.js').
    pipe(concat('angular-form-utils.min.js')).
    pipe(uglify({
      preserveComments: 'some',
      outSourceMap: true
    })).
    pipe(gulp.dest('dist'));
});
