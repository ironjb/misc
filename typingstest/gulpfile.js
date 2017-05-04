(function () {
	var gulp = require('gulp');
	var ts = require('gulp-typescript');
	var bower = require('gulp-bower');

	gulp.task('bower', function () {
		return bower();
	});

	gulp.task('copy', ['bower'], function () {
		// Copy jQuery
		gulp.src([
			'bower_components/jquery/dist/jquery.min.js'
			])
		.pipe(gulp.dest('Scripts/lib/jquery'));

		// Copy bootstrap .js
		gulp.src([
			'bower_components/bootstrap/dist/js/bootstrap.min.js'
			])
		.pipe(gulp.dest('Scripts/lib/bootstrap'));

		// Copy Angular
		gulp.src([
			'bower_components/angular/angular.min.js'
			])
		.pipe(gulp.dest('Scripts/lib/angular'));

		// // Copy Typings
		// gulp.src([
		// 	'node_modules/@types/**/index.d.ts'
		// 	])
		// .pipe(gulp.dest('Scripts/typings/'));
	});

	gulp.task('ts:compile', function () {
		var tsProject = ts.createProject('./tsconfig.json');
		var tsResult = tsProject.src()
		// .pipe(ts(tsProject));
		.pipe(tsProject());

		// dest() should be same as direcotry tsconfig.json. Should also have "outDir" in tsconfig.json file to help output files to correct directories.
		return tsResult.js.pipe(gulp.dest('./'));
	});

	gulp.task('ts:watch', ['ts:compile'], function() {
		var watcher = gulp.watch('**/Scripts/**/*.ts', ['ts:compile']);
		watcher.on('change', function(event) {
			console.log('File [' + event.path + '] was ' + event.type + '!');
		});
	});


	// Old compile watch stuff
	gulp.task('ts:watchOld', ['ts:compile'], function() {
		var watcher = gulp.watch('js/**/*.ts', ['ts:compile']);
		watcher.on('change', function(event) {
			console.log('File [' + event.path + '] was ' + event.type + '!');
		});
	});

	gulp.task('default', function () {
		// place code for your default task here
	});
})();
