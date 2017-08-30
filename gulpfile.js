var gulp = require('gulp');

var less= require('gulp-less');

var mincss = require('gulp-clean-css')
var concatCss =require('gulp-concat')

//创建任务
gulp.task ('testname',function(){
	gulp.src('./text.less')
		.pipe(less())
		.pipe(gulp.dest('./text.css'))
});

gulp.task('kks',function(){
	gulp.src('./text.css/*.css')
		.pipe(mincss(''))
		.pipe(gulp.dest('./3'))
});

gulp.task('ks',function(){
	gulp.src('./1/*.css')
		.pipe(concatCss('hebing.css'))
		.pipe(gulp.dest('./12'))
});
gulp.task('k',function(){
	gulp.src('./1/*.css')
		.pipe(concatCss('hebing.css'))
		.pipe(gulp.dest('./12'))
});