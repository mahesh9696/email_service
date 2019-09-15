var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('copy', function () {
    return gulp.src(['src/config/config.json'])
        .pipe(gulp.dest('dist/config'));
});

gulp.task('tsc',
    function () {
        return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest('dist'));
    });

gulp.task('build', ['copy', 'tsc']);