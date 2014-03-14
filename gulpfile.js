(function () {
    "use strict";
    var gulp = require('gulp');
    var gutil = require('gulp-util');

    var coffee = require('gulp-coffee');

    var clean = require('gulp-clean');

    var imagemin = require('gulp-imagemin');

    gulp.task('clean', function () {
        return gulp.src('public', {
            read: false
        }).pipe(clean());
    });


    gulp.task('coffee', function () {
        return gulp.src('./src/*.coffee')
            .pipe(coffee({
                bare: true
            }).on('error', gutil.log))
            .pipe(gulp.dest('./public/'));
    });

    gulp.task('imagemin', function () {
        return gulp.src('src/resources/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('public/resources/images'));
    });

    gulp.task('copy_js', function () {
        return gulp.src('./src/resources/js/*')
            .pipe(gulp.dest('./public/resources/js'));
    });


    gulp.task('default', ['coffee', 'imagemin', 'copy_js'], function () {
        // place code for your default task here
        gulp.watch('./src/*.coffee', function () {
            gulp.run('coffee');
        });

    });
})();
