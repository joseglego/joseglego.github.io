'use strict';

// Section 0: Define
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'browser-sync', 'del', 'run-sequence']
});
var gulpIf = require('gulp-if');
var jsFilter = plugins.filter("app/**/*.js", { restore: true });
var cssFilter = plugins.filter("app/**/*.css", { restore: true });
var indexHtmlFilter = plugins.filter(['**/*', '!**/index.html'], { restore: true });


// Section 1: Watch Tasks
//// Section 1.0: Browser Sync - Server
gulp.task('browserSync', function() {
  plugins.browserSync.init({
    server: {
      baseDir: 'app',
      routes: {
        "/bower_components": "bower_components"
      }
    }
  });
});

gulp.task('browserSyncTest', function() {
  plugins.browserSync.init({
    server: {baseDir: '/'}
  });
});

gulp.task('serve:test', ['browserSync', 'sass'], function (){});

//// Section 1.1: Sass Task
gulp.task('sass', function(){
  return gulp.src('app/assets/scss/main.scss')
    .pipe(plugins.sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/styles'));
});

//// Section 1.2: ESlint Task
gulp.task('lint', function () {
  return gulp.src(['app/assets/scripts/**/*.js','!node_modules/**'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});
 
//// Section 1.3: Watch HTML, JS & Sass
gulp.task('serve', ['browserSync', 'sass'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', plugins.browserSync.reload); 
  gulp.watch('app/views/**/*.html', plugins.browserSync.reload); 
  gulp.watch('app/assets/scripts/**/*.js', ['lint', plugins.browserSync.reload]);
  gulp.watch('app/assets/styles/**/*.css', plugins.browserSync.reload); 
});

// Section 2: Build Tasks
//// Section 2.0: Check HTML & Minify included HTML, CSS & JS
gulp.task('useref', function(){
  return gulp.src('app/index.html')
    .pipe(plugins.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe(jsFilter).pipe(plugins.uglify()).pipe(jsFilter.restore)            // JS
    .pipe(cssFilter).pipe(plugins.csso()).pipe(cssFilter.restore)            // CSS
    .pipe(indexHtmlFilter).pipe(plugins.rev()).pipe(indexHtmlFilter.restore) // HTML 0
    .pipe(plugins.revReplace())
    .pipe(gulpIf('*.html', plugins.htmlmin({collapseWhitespace: true})))     // HTML 1
    .pipe(gulp.dest('dist'));
});

//// Section 2.1: Minify Images and move
gulp.task('copy:images', function(){
  return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
    .pipe(plugins.imagemin([
      plugins.imagemin.gifsicle({interlaced: true}),
      plugins.imagemin.jpegtran({progressive: true}),
      plugins.imagemin.optipng({optimizationLevel: 5}),
      plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest('dist/assets/images'));
});

//// Section 2.2: Move fonts
gulp.task('copy:fonts', function () {
  return gulp.src('bower_components/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(plugins.flatten())
    .pipe(gulp.dest('dist/assets/fonts'));
});

//// Section 2.3: Move files
gulp.task('copy:files', function () {
  return gulp.src('app/assets/files/**/*.pdf')
    .pipe(plugins.flatten())
    .pipe(gulp.dest('dist/assets/files'));
});

//// Section 2.4: Delete previous version
gulp.task('clean:dist', function() {
  return plugins.del.sync('dist');
});

//// Section 2.5: Move slick files
gulp.task('copy:slick-font', function () {
  return gulp.src('bower_components/slick-carousel/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(plugins.flatten())
    .pipe(gulp.dest('dist/assets/styles/fonts'));
});
gulp.task('copy:slick-gif', function () {
  return gulp.src('bower_components/slick-carousel/**/*.gif')
    .pipe(plugins.flatten())
    .pipe(gulp.dest('dist/assets/styles'));
});

//// Section 2.6: Copy Views
gulp.task('copy:views', function(){
  return gulp.src('app/views/**/*.html')
    .pipe(gulpIf('*.html', plugins.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist/views'));
});

//// Section 2.7: Build Task
gulp.task('build:dist', function (callback) {
  plugins.runSequence(
    ['clean:dist'], 
    ['useref', 'copy:images', 'copy:fonts', 'copy:files', 'copy:slick-font', 'copy:slick-gif', 'copy:views'],
    callback
  );
});

// Section 3: GitHub Pages
//// Section 3.0: Delete Index
gulp.task('clean:index', function() {
  return plugins.del.sync('index.html');
});

//// Section 3.1: Move Index
gulp.task('move:index', function () {
  return gulp.src('dist/index.html')
  .pipe(gulp.dest("."));
});

//// Section 3.2: Clean Assets
gulp.task('clean:assets', function() {
  return plugins.del.sync('assets');
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
  plugins.runSequence(
    ['clean:index','clean:assets'],
    callback
  );  
});

//// Section 3.6: Move generated files from dist/ to / (Others Apps - to show in GitHub Pages)
gulp.task('move:ghp', function (callback) {
  plugins.runSequence(
    ['move:index', 'move:dist', 'move:views'],
    'clean:dist',
    callback
  );  
});

//// Section 3.7: BuildTask
gulp.task('build:ghp', function (callback) {
  plugins.runSequence(
    'clean:ghp',
    'build:dist',
    'move:ghp',
    callback
  );
});
