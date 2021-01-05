const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile .scss to .css

function style() {
    // find the scss file
    return gulp.src('src/scss/*.scss')
    // pass the scss through the compiler
        .pipe(sass())
    // where do i save the compiled css
        .pipe(gulp.dest('src/css'))
    // stream changes to all browsers
        .pipe(browserSync.stream());
}

// watch for changes

function watch () {
    browserSync.init({
         server: {
             baseDir: './'
         }
    });
    gulp.watch('src/scss/*.scss', style); // when anything changes, run gulp style
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;