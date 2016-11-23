import gulp from 'gulp';
import karma from 'karma';
const Server = karma.Server;

const karmaFile = `${__dirname}/../../karma.conf.js`;

gulp.task('test:unit', ['bower:test'], (done) => {
    new Server({
        configFile: karmaFile,
        singleRun: true
    }, done).start();
});
