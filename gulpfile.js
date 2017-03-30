var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var moduleImporter = require('sass-module-importer');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass({ importer: moduleImporter() }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
      cascade: false
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});
