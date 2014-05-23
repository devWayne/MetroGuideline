var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus',function(){
	gulp.src('./src/stylus/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./dist'));
})
gulp.task('default',['stylus'])