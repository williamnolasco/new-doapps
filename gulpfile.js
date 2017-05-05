var gulp   = require('gulp'),
	pug    = require('gulp-pug'),
	stylus = require('gulp-stylus'),
 	browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./client/css/*.styl", ['stylus']);
    gulp.watch('./dev/**/*.pug', ['usandopug']);
});

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
		.pipe(gulp.dest('./client/css'))
		.pipe(browserSync.stream());
});

gulp.task('default', function(){
	gulp.watch('./dev/**/*.pug', ['usandopug']);
});
