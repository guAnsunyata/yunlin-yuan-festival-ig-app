var gulp = require('gulp'),               // 載入 gulp
    gulpSass = require('gulp-sass');    // 載入 gulp-sass

gulp.task('watch', function () {
    gulp.watch('./public/scss/*.scss', ['styles']);
});

gulp.task('styles', function () {
    gulp.src('./public/scss/main.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass({          // 編譯 Scss
            outputStyle: 'compressed'
        }))         
        .pipe(gulp.dest('./public/css'));  // 指定編譯後的 css 檔案目錄
});