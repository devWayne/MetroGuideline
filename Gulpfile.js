var gulp = require("gulp");
var less = require("gulp-less");
var cssmin = require("gulp-cssmin");
var concat = require("gulp-concat");

gulp.task("less", function() {
	gulp.src("src/less/*.less")
		.pipe(concat("dp-metro.less"))
		.pipe(less())
		.pipe(gulp.dest("dist/css/"));
});
gulp.task("cssmin", function() {
	gulp.src("src/less/*.less")
		.pipe(concat("dp-metro.min.less"))
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/cssmin/"));
});

gulp.task('watch', function() {
	gulp.watch('src/less/*.less', ['less']);
});

gulp.task("default", ["less", "cssmin"]);