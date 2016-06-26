var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    watch       = require('gulp-watch'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    templateCache = require('gulp-angular-templatecache');

var paths = {
    mainModule: 'toDoApp',
    distRoot: "dist/",
    distScripts: "dist/scripts",
    distCss: "dist/styles",
    distTemplates: 'dist/templates',
    srcJs: "src/js/**/*.js",
    srcHtml: "src/html/*.html",
    srcCss: "src/styles/*.css",
    srcTemplates: 'src/js/directives/*.html'
};


gulp.task('templates', function() {
    return gulp.src(paths.srcTemplates)
        .pipe(templateCache({module: paths.mainModule}))
        .pipe(gulp.dest(paths.distTemplates));
});

gulp.task('scripts', ['templates'], function() {
    return gulp.src([paths.srcJs, paths.distTemplates + '/templates.js'])
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