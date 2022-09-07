const { src, dest, parallel, series, watch } = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectInit.json');
const path = projectConfig.path;

//Live Server
const browserSync = require('browser-sync').create();
function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        server: { baseDir: 'src/' }, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true, // Режим работы: true или false
        open: true,
    })
}



exports.browsersync = browsersync;