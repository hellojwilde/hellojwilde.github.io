const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const rework = require('gulp-rework');
const reworkImport = require('rework-import');
const reworkInline = require('rework-plugin-inline');
const reworkVars = require('rework-vars');
const sourcemaps = require('gulp-sourcemaps');

const build = gulp.series(() =>
  gulp.src(['assets/styles/jwilde.css'])    
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
    .pipe(gulp.dest('assets')),
);

const watch = () => gulp.watch(['assets/images/*', 'assets/styles/*'], build);

exports.build = build;
exports.default = watch;

