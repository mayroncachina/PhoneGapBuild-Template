var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('dist', function(){
  return gulp.src(['./www/**'])
        .pipe(zip('phonegap.zip'))

        .pipe(gulp.dest('./dist/'));
});