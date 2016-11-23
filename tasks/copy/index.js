import gulp from 'gulp';
import config from '../config';

gulp.task('copy:html', ['clean'], () => {
    return gulp.src(config.globs.html)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('copy:html:watch', [], () => {
    return gulp.src(config.globs.html)
        .pipe(gulp.dest(config.paths.dist));
});
