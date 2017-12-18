var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
var htmlreplace = require('gulp-html-replace');
var htmlMin = require('gulp-htmlmin');

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

    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/css/**/*.css',['styles']);
    gulp.watch('src/js/**/*.js',['styles']);
    gulp.watch('src/**/*.html',['styles']);
});