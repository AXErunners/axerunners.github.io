'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
const $ = gulpLoadPlugins();

// Delete the _site directory.
gulp.task('cleanup-build', () => {
  return gulp.src('_site', {read: false})
      .pipe($.clean());
});

// Minify the HTML.
gulp.task('minify-html', () => {
  return gulp.src('_site/**/*.html')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('_site'));
});

// Optimize images.
gulp.task('minify-images', () => {
  gulp.src('assets/images/**/*')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('_site/assets/images'));
});

// Concatenate, transpiles ES2015 code to ES5 and minify JavaScript.
gulp.task('scripts', () => {
  gulp.src([
    // Note: You need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
    './assets/js/main.js'
  ])
    .pipe($.concat('main.js'))
    .pipe($.babel())
    .pipe($.uglify())
    .pipe(gulp.dest('scripts'));
});

// Minify and add prefix to css.
gulp.task('css', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src('asstes/css/main.css')
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.cssnano())
    .pipe(gulp.dest('_site/assets/css'));
});

// Compile scss to css.
gulp.task('scss', () => {
    return gulp.src('_sass/main.sass')
        .pipe($.sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(gulp.dest('css'));
});

// Watch change in files.
gulp.task('serve', ['jekyll-build'], () => {
  browserSync.init({
    notify: false,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: '_site',
    port: 3000
  });

  // Warch html changes.
  gulp.watch([
    'assets/css/**/*.css',
    'assets/js/**/*.js',
    '_includes/**/*.html',
    '_layouts/**/*.html',
    'pages/**/*.md',
    'index.md'
  ], ['jekyll-build', browserSync.reload]);

  // Watch sass changes.
  gulp.watch('_sass/**/*.sass', ['scss']);

  // Watch JavaScript changes.
  gulp.watch('assets/js/**/*.js', ['scripts']);
});

gulp.task('generate-service-worker', (callback) => {
  var path = require('path');
  var rootDir = '_site';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,json}'],
    stripPrefix: rootDir,
    replacePrefix: '/AXErunners'
  }, callback);
});

  gulp.task('fix-config', () => {
    gulp.src('_config.yml')
      .pipe($.replace('baseurl: ""', 'baseurl: "AXErunners"'))
      .pipe($.clean())
      .pipe(gulp.dest('.'));
  });

  gulp.task('revert-config', () => {
    gulp.src('_config.yml')
        .pipe($.replace('baseurl: "AXErunners"', 'baseurl: ""'))
        .pipe($.clean())
        .pipe(gulp.dest('.'));
  });

gulp.task('jekyll-build', ['scripts', 'scss'], $.shell.task(['jekyll build']));

gulp.task('jekyll-build-for-deploy', $.shell.task(['jekyll build']));

// Default task.
gulp.task('build', () =>
  runSequence(
    'fix-config',
    'cleanup-build',
    'scss',
    'scripts',
    'jekyll-build-for-deploy',
    'minify-html',
    'css',
    'generate-service-worker',
    'minify-images',
    'revert-config'
  )
);

// Depoly website to gh-pages.
gulp.task('gh-pages', () => {
  return gulp.src('./_site/**/*')
    .pipe($.ghPages());
});

var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src('./_site/**/*')
    .pipe(deploy({
      remoteUrl: "https://github.com/AXErunners/axerunners.github.io",
      branch: "master"
    }))
});

gulp.task('deploy', () => {
  runSequence(
    'fix-config',
    'cleanup-build',
    'scss',
    'scripts',
    'jekyll-build-for-deploy',
    'minify-html',
    'css',
    'generate-service-worker',
    'minify-images',
    'gh-pages',
    'revert-config'
  )
});
