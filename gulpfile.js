var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    watch       = require('gulp-watch'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify');

var paths = {
    distRoot: "dist/",
    distScripts: "dist/scripts",
    distCss: "dist/styles",
    srcJs: "src/js/**/*.js",
    srcHtml: "src/html/*.html",
    srcCss: "src/styles/*.css"
};

gulp.task('scripts', function() {
    return gulp.src(paths.srcJs)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.distScripts))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.distScripts));
});

gulp.task('html', function () {
    return gulp.src(paths.srcHtml)
        .pipe(gulp.dest(paths.distRoot))
        .pipe(browserSync.stream());
});

gulp.task('css', function () {
    return gulp.src(paths.srcCss)
        .pipe(gulp.dest(paths.distCss))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init([paths.srcJs], {
        server: {
            baseDir: paths.distRoot
        }
    });
    gulp.watch(paths.srcHtml, ['html']);
    gulp.watch(paths.srcJs, ['scripts']);
    gulp.watch(paths.srcCss, ['css']);
});

gulp.task('default', ['scripts', 'html', 'css', 'serve']);

// TODO: minify css and html