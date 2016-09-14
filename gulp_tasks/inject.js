const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
  const injectStyles = gulp.src([
    conf.path.src('../bower_components/bootstrap/dist/css/bootstrap.min.css'),
    conf.path.src('../bower_components/font-awesome/css/font-awesome.min.css'),
    conf.path.src('../src/style/custom.css'),
  ], {
    read: false
  });
  const injectScripts = gulp.src([

conf.path.tmp('../bower_components/angular-resource/angular-resource.min.js'),
      conf.path.tmp('**/*.js'),
      conf.path.tmp('../bower_components/bootstrap/dist/js/bootstrap.min.js'),
      `!${conf.path.tmp('**/*.spec.js')}`
    ])
    .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  return gulp.src(conf.path.src('index.html'))
    .pipe(gulpInject(injectStyles, injectOptions))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}
