const { src, dest, parallel, series, watch } = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectInit.json');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const gcmq = require('gulp-group-css-media-queries');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');

const isDev = function () {
    return !argv.prod;
};

const isProd = function () {
    return !!argv.prod;
};

//Live Server
const browserSync = require('browser-sync').create();
function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        server: path.dist.distPath, // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true, // Режим работы: true или false
        open: true,
    })
}

//our paths html
const path = projectConfig.path;
path.src.html[0] = path.src.srcPath + path.src.html[0];
path.src.html[1] = "!" + path.src.html[0].slice(0, -6) + "_*.html";
path.src.html[2] = "!" + path.src.srcPath + "/assets";
path.src.html[3] = "!" + path.src.srcPath + "/_html";

path.dist.html = path.dist.distPath + path.dist.html;

//path for css
path.src.style[0] = path.src.srcPath + path.src.style[0];
path.dist.style = path.dist.distPath + path.dist.style;
//path for js
path.src.script[0] = path.src.srcPath + path.src.script[0];
path.dist.script = path.dist.distPath + path.dist.script;
//path for image
path.src.image[0] = path.src.srcPath + path.src.image[0];
//path.src.image[1] = "!" + path.src.image[0].slice(0, -6) + "svgIcons/*.svg";
path.dist.image = path.dist.distPath + path.dist.image;

path.watch = {};
//watch html
path.watch.html = [];
path.watch.html[0] = path.src.html[0];
//watch css
path.watch.style = [];
path.watch.style[0] = path.src.style[0].replace(path.src.style[0].split('/').pop(), '**/*.scss');
//watch js
path.watch.script = [];
path.watch.script[0] = path.src.script[0].replace(path.src.script[0].split('/').pop(), '**/*.js');
//watch image
path.watch.image = [];
path.watch.image[0] = path.src.image[0];
//path.watch.image[1] = "!" + path.src.image[0].slice(0, -6) + "svgIcons/*.svg";

function watchApp() {
    watch(path.watch.html, njk);
    watch(path.watch.style, scss);
    watch(path.watch.script, script);
    watch(path.watch.image, imageMin);
}

function njk() {
    return src(path.src.html)
        .pipe(nunjucks.compile())
        .pipe(dest(path.dist.html))
        .on('end', browserSync.reload);
}

function scss() {
    return src(path.src.style)
        .pipe(gulpif(isDev(), sourcemaps.init()))
        .pipe(sass())
        .pipe(gulpif(isProd(), autoprefixer({
            grid: true
        })))
        .pipe(gulpif(isProd(), gcmq()))
        .pipe(gulpif(isDev(), sourcemaps.write()))
        .pipe(gulpif(isProd(), dest(path.dist.style)))
        .pipe(gulpif(isProd(), csso()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(path.dist.style))
        .pipe(browserSync.reload({ stream: true }))
}

const webpackConf = {
    mode: isDev() ? 'development' : 'production',
    devtool: isDev() ? 'eval-source-map' : false,
    optimization: {
        minimize: false
    },
    output: {
        filename: 'main.js',
    },
    module: {
        rules: []
    }
};

//include babel if product
if (isProd()) {
    webpackConf.module.rules.push({
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
    });
}

function script() {
    return src(path.src.script)
        .pipe(plumber())
        .pipe(webpackStream(webpackConf, webpack))
        .pipe(gulpif(isProd(), dest(path.dist.script)))
        .pipe(gulpif(isProd(), uglify()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(path.dist.script))
        .pipe(browserSync.reload({ stream: true }))
}


function imageMin() {
    return src(path.src.image)
        .pipe(dest(path.dist.image))
}


exports.default = series(
    parallel(njk, scss, script, imageMin),
    parallel(browsersync, watchApp)
);
