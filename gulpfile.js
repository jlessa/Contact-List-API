var gulp = require('gulp');
var nomemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');
var supertest = require('supertest');

gulp.task('default', function () {
    nomemon({
            script: 'index.js',
            ext: 'js',
            env: {
                PORT: 3000
            },
            ignore: ['./node_moudles']
        })
        .on('restart', function () {
            console.log('Restarting Server...');
        });
});

gulp.task('test', function () {
    env({
        vars: {
            ENV: 'Test'
        }
    });
    
    gulp.src('tests/*.js', {
            read: false
        })
        .pipe(gulpMocha({
            reporter: 'nyan'
        }));
});