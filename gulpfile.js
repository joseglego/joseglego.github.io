'use strict';

// Section 0: Define
var gulp = require('gulp');

//// LiveReload
var browserSync = require('browser-sync').create();

//// Sass
var sass = require('gulp-sass');

//// Eslint
var eslint = require('gulp-eslint');

//// Load from HTML files, concat & minify (html, css & js)
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

//// Images
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

//// BowerFonts
var flatten = require('gulp-flatten');

//// Delete
var del = require('del');

//// Move index
var rename = require("gulp-rename");

//// Parallel Tasks
var runSequence = require('run-sequence');

// Section 1: Watch Tasks
//// Section 1.0: Browser Sync - Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

//// Section 1.1: Sass Task
gulp.task('sass', function(){
  return gulp.src('app/assets/scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/styles'));
});

//// Section 1.2: ESlint Task
gulp.task('lint', function () {
  return gulp.src(['app/assets/scripts/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
 
//// Section 1.3: Watch HTML, JS & Sass
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/views/**/*.html', browserSync.reload); 
  gulp.watch('app/assets/scripts/**/*.js', ['lint', browserSync.reload]);
  gulp.watch('app/assets/styles/**/*.css', browserSync.reload); 
});

// Section 2: Build Tasks
//// Section 2.0: Check HTML & Minify included HTML, CSS & JS
gulp.task('useref', function(){
  return gulp.src('app/index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

//// Section 2.1: Minify Images and move
gulp.task('copy:images', function(){
  return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
    .pipe(imagemin({ progressive: true}))
    .pipe(gulp.dest('dist/assets/images'));
});

//// Section 2.2: Move fonts
gulp.task('copy:fonts', function () {
  return gulp.src('app/bower_components/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('dist/assets/fonts'));
});

//// Section 2.3: Move files
gulp.task('copy:files', function () {
  return gulp.src('app/assets/files/**/*.pdf')
    .pipe(flatten())
    .pipe(gulp.dest('dist/assets/files'));
});

//// Section 2.4: Delete previous version
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//// Section 2.5: Move slick files
gulp.task('copy:slick-font', function () {
  return gulp.src('app/bower_components/slick-carousel/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(flatten())
    .pipe(gulp.dest('dist/assets/styles/fonts'));
});
gulp.task('copy:slick-gif', function () {
  return gulp.src('app/bower_components/slick-carousel/**/*.gif')
    .pipe(flatten())
    .pipe(gulp.dest('dist/assets/styles'));
});

//// Section 2.6: Copy Views
gulp.task('copy:views', function(){
  return gulp.src('app/views/**/*.html')
    .pipe(gulpIf('*.html', htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist/views'));
});

//// Section 2.7: Build Task
gulp.task('build:dist', function (callback) {
  runSequence(
    ['clean:dist'], 
    ['useref', 'copy:images', 'copy:fonts', 'copy:files', 'copy:slick-font', 'copy:slick-gif', 'copy:views'],
    callback
  );
});

// Section 3: GitHub Pages
//// Section 3.0: Delete Index
gulp.task('clean:index', function() {
  return del.sync('index.html');
});

//// Section 3.1: Move Index
gulp.task('move:index', function () {
  return gulp.src('dist/index.html')
  .pipe(rename("index.html"))
  .pipe(gulp.dest("."));
});

//// Section 3.2: Clean Assets
gulp.task('clean:assets', function() {
  return del.sync('assets');
});

//// Section 3.3: Move Assets
gulp.task('move:dist', function () {
  return gulp.src('dist/assets/**/*')
    .pipe(gulp.dest('./assets'));
});

//// Section 3.4: Move Views
gulp.task('move:views', function () {
  return gulp.src('dist/views/**/*')
    .pipe(gulp.dest('./views'));
});

//// Section 3.5: Clean GitHub Pages
gulp.task('clean:ghp', function (callback) {
  runSequence(
    ['clean:index','clean:assets'],
    callback
  );  
});

//// Section 3.6: Move generated files from dist/ to / (Others Apps - to show in GitHub Pages)
gulp.task('move:ghp', function (callback) {
  runSequence(
    ['move:index', 'move:dist', 'move:views'],
    'clean:dist',
    callback
  );  
});

//// Section 3.7: BuildTask
gulp.task('build:ghp', function (callback) {
  runSequence(
    'clean:ghp',
    'build:dist',
    'move:ghp',
    callback
  );
});
