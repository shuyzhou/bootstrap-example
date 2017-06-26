var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', reload);
});
gulp.task('default', ['serve']);