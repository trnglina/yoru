const babel = require('gulp-babel')
const gulp = require('gulp')
const livereload = require('gulp-livereload')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp.src('styles/screen.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(livereload())
})

gulp.task('js', () => {
  gulp.src('scripts/**/*.js')
    .pipe(gulp.dest('assets'))
  return gulp.src('scripts/app.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch('./scripts/**/*.js', gulp.series('js'))
  gulp.watch('./styles/**/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('watch'))
