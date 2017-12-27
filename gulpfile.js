var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
var htmlreplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
    	.pipe(sass( {
    		style: 'expanded'
    	}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
    gulp.src('src/css/**/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('dist'));
	gulp.src('src/js/**/*.js')
		.pipe(concat('final.js'))
		.pipe(gulp.dest('dist'));
	gulp.src('src/images/*')
		.pipe(changed('dist/images'))
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
	gulp.src('src/*.html')
		.pipe(htmlreplace({
			'css' : 'style.css',
			'js' : 'final.js'
		}))
		.pipe(htmlMin({
			sortAttributes: true,
			sortClassName: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist/'))
});


//Watch task
gulp.task('default',function() {
	//BrowserSync
	browserSync.init({
	    server: "src"
	}) 

    gulp.watch('src/sass/**/*.scss',['styles']).on('change', browserSync.reload);
    gulp.watch('src/css/**/*.css',['styles']).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js',['styles']).on('change', browserSync.reload);
    gulp.watch('src/**/*.html',['styles']).on('change', browserSync.reload);
});