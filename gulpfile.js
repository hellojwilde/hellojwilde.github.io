var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var rework = require('gulp-rework');
var reworkImport = require('rework-import');
var reworkInline = require('rework-plugin-inline');
var reworkVars = require('rework-vars');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  return gulp.src(['assets/styles/jwilde.css'])    
    .pipe(rework(
      reworkInline('assets/images'), 
      reworkImport(),
      reworkVars(),
      {sourcemap: true}
    ))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(autoprefixer())
      //.pipe(minify())
      .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'));
});

gulp.task('default', ['build'], function() {
  gulp.watch(['assets/images/*', 'assets/styles/*'], ['build']);
});