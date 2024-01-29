
const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');



const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('layout/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}

exports.default = includeHTML