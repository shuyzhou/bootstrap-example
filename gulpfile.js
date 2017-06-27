var gulp        = require('gulp');
var path        = require('path');
var less        = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["*.html",'./bootstrap/css/*.css']).on('change', reload);
    gulp.watch("./less/*.less",['less']);
});
//编译Less文件
gulp.task('less', function () {
  return gulp.src('./less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('./bootstrap/css'));
});
gulp.task('default', ['serve']);