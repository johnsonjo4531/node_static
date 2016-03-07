var gulp = require('gulp'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    gprint = require('gulp-print'),
    //notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    gWatch = require('gulp-watch');

gulp.task('default', function() {
    var trueBase = "public/assets/js/";
    return gWatch(trueBase + '/**/*-es6.js', function(obj){
        if (obj.event === 'change' || obj.event === 'add') {
            gulp.src(obj.path)
                .pipe(plumber({
                    errorHandler: function (error) { /* elided */console.log(error); }
                }))
                .pipe(babel({sourceMaps: true, compact: false}))
                .pipe(rename(function (path) {
                    path.basename = path.basename.replace(/-es6$/, '');
                }))
                .pipe(gulp.dest(trueBase + obj.relative.replace(/(.*[\/\\]+)?.*$/, '$1')))
                .pipe(gprint(function(filePath){ return "File processed: " + filePath; }));
        }
    });
});
