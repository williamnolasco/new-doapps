var gulp   = require('gulp'),
	pug    = require('gulp-pug'),
	stylus = require('gulp-stylus');

gulp.task('usandopug', function(){
	gulp.src('./dev/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('stylus', function(){
	gulp.src('./client/css/*.styl')
	    .pipe(stylus({
	      	compress: true
	    }))
	    .pipe(gulp.dest('./client/css'));
});

gulp.task('default', function(){
	gulp.watch('./dev/**/*.pug', ['usandopug']);
});

gulp.task('dev', function(){
	gulp.watch('./dev/**/*.pug', ['usandopug']);
	gulp.watch('./client/css/*.styl', ['stylus']);
});