/*
|--------------------------------------------------------------------------
| GULPGILE.JS
|--------------------------------------------------------------------------
*/

// Require tools
const gulp = require('gulp');
const watch = require('gulp-watch');

// CSS related
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// JS related
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

// BrowserSync
const browserSync = require('browser-sync').create();
global.browserSync = browserSync;

// Defining variables for source and destination folders
const src = 'src';
const dest = 'dest';

// Path object containing path info used in tasks
const path = {
  src: {
    base: src,
    scss: src + '/styles',
    assets: src + '/assets',
  },
  dest: {
    base: dest,
    css: dest + '/styles',
    assets: dest + '/assets',
  }
}

// Set the default task to watch
gulp.task('default', ['watch']);

/*
|--------------------------------------------------------------------------
| BROWSER SYNC TASKS
|--------------------------------------------------------------------------
*/

// Task for initializing browsersync 
gulp.task('browser-sync', function() {
  return global.browserSync.init({
    server: {
      baseDir: path.dest.base,
    },
    injectchanges: true,
  });
});

/*
|--------------------------------------------------------------------------
| CSS TASKS
|--------------------------------------------------------------------------
*/

// Compile SCSS to css an move to dest folder
gulp.task('sass', function(){
  return gulp.src( path.src.scss + '/main.scss' )
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(path.dest.css))
});

// Move Normalize.css to desired path
gulp.task('normalize', function(){
  return gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest(path.dest.css))
});

// CSS watch task
gulp.task('css:watch', ['sass', 'normalize'], function() {
  return global.browserSync.reload('*.css');
});

/*
|--------------------------------------------------------------------------
| HTML TASKS
|--------------------------------------------------------------------------
*/

// Task that moves html files to the destination folder
gulp.task('html', function() {
  gulp.src(path.src.base + '/**/*.html')
    .pipe(gulp.dest(path.dest.base));
});

// Task used to move HTML and update browserSync 
gulp.task('html:watch', ['html'], function() {
  return global.browserSync.reload('*');
});

/*
|--------------------------------------------------------------------------
| JAVASCRIPT TASKS
|--------------------------------------------------------------------------
*/

// Babel task
gulp.task('babel', function() {
  return gulp.src(path.src.base + '/**/*.js')
    .pipe(babel({presets: ['env']}));
});

// Webpack task
gulp.task('webpack', function() {
  return gulp.src(path.src.base + '/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(path.dest.base));
});

// Javascript watch task
gulp.task('js:watch', ['babel', 'webpack'], function() {
  return global.browserSync.reload('*');
});

/*
|--------------------------------------------------------------------------
| WATCH TASKS
|--------------------------------------------------------------------------
*/

// Task watching for changes and ruinng approiate tasks
gulp.task('watch', ['babel', 'webpack', 'sass', 'html', 'normalize', 'browser-sync'], function() {
  gulp.watch(path.src.scss + '/**/*.scss', ['css:watch']);
  gulp.watch(path.src.base + '/**/*.html', ['html:watch']);
  gulp.watch(path.src.base + '/**/*.js', ['js:watch']);
});
