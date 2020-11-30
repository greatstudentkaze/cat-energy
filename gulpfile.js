import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import sync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import del from 'del';
import htmlmin from 'gulp-htmlmin';
import babel from 'gulp-babel';
import terser from 'gulp-terser';

sync.create();

// Styles

export const styles = () =>
  gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());

// Images, WebP, Sprite

export const images = () =>
  gulp.src('source/img/**/*.{jpg,jpeg,png,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive:true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('source/img'));

export const webpJPGImages = () =>
  gulp.src('source/img/**/*.{jpg,jpeg}')
    .pipe(webp({quality: 95}))
    .pipe(gulp.dest('source/img'));

export const webpPNGImages = () =>
  gulp.src('source/img/**/*.{png}')
    .pipe(webp({lossless: true}))
    .pipe(gulp.dest('source/img'));

export const sprite = () =>
  gulp.src('source/img/**/icon-*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));

// Clean

export const clean = () => del('build');

// Copy

export const copy = () =>
  gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/*.ico'
  ], {base: 'source'})
    .pipe(gulp.dest('build'));

// HTML

export const html = () =>
  gulp.src('source/*.html', {base: 'source'})
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
    .pipe(sync.stream());

// JS

export const js = () =>
  gulp.src('source/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('build/js'))
    .pipe(sync.stream());

// Build

export const build = gulp.series(clean, webpJPGImages, webpPNGImages, copy, styles, sprite, html, js);

// Server

export const server = done => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher

export const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('source/*.html', gulp.series('html'));
  gulp.watch('source/js/*.js', gulp.series('js'));
};

export default gulp.series(build, server, watcher);
