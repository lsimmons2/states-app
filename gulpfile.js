
var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');


gulp.task('build', function(){
  return gulp.src('server/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/server'))
});


gulp.task('api-test', ['build'], function(){
  process.env.NODE_ENV = 'test';
  gulp.src('test/server/states.spec.js')
    .pipe(mocha())
    .on('error', gutil.log)
});


gulp.task('api-test:watch', ['api-test'], function(){
  gulp.watch([
    'test/server/states.spec.js',
    'server/routes.js',
    'server/index.js'
  ], ['api-test']);
});
