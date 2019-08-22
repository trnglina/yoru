const gulp = require('gulp')
const livereload = require('gulp-livereload')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const zip = require('gulp-zip')

sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp
    .src('styles/screen.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'))
    .pipe(livereload())
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch('./styles/**/*.scss', gulp.series('sass'))
})

gulp.task('zip', () => {
  return gulp.src(['*.hbs', 'package.json', 'LICENSE', 'partials/**', 'assets/**'], { base: '.' })
    .pipe(zip('yoru.zip'))
    .pipe(gulp.dest('dist'))
})

gulp.task('dist', gulp.series('sass', 'zip'))

gulp.task('default', gulp.series('watch'))
