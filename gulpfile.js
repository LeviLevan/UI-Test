'use strict';

const
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify');

// Используем node-sass вместо sass
sass.compiler = require('node-sass');

// Пути
const paths = {
    scss: './assets/scss/**/*.scss',
    cssDest: './assets/css/',
    scripts: './assets/js/**/*.js',
    jsDest: './js/'
};

// Задача CSS
async function css() {
    return gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({ overrideBrowserslist: ['last 10 versions'], cascade: false })]))
        .pipe(cleanCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.cssDest))
        .pipe(notify('Compile Sass Done!'));
}

// Задача JS
async function js() {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.jsDest))
        .pipe(notify('Minify JS Done!'));
}

// Watch
async function watch() {
    gulp.watch(paths.scss, css);
    gulp.watch(paths.scripts, js);
}

gulp.task('default', watch);