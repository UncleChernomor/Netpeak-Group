const { src, dest, parallel, series, watch } = require('gulp');
const argv = require('yargs').argv;

//Live Server
const browserSync = require('browser-sync').create();
function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'app/' }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    })
}



exports.browsersync = browsersync;