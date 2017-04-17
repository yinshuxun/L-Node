var gulp = require('gulp');
var mixWatch = require("../gulp-mix-watch");

gulp.task('watch',mixWatch({
    jsOutDir:"./",
    cssOutDir:"../../css/"
}))
