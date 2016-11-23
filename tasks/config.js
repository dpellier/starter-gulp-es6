const base = 'src';
const assets = `${base}/assets`;

const ports = {
    dev: 8080
};

const paths = {
    app: `${base}/app`,
    assets: assets,
    dist: 'dist',
    fonts: `${assets}/fonts`,
    images: `${assets}/images`,
    index: `${base}/index.html`,
    bowerComponents: `${base}/bower_components`
};

const globs = {
    fonts: `${paths.fonts}/**/*`,
    html: `${paths.app}/**/*.html`,
    images: `${paths.images}/**/*`,
    js: [
        `${base}/**/*.js`,
        `!${paths.bowerComponents}/**/*`
    ],
    scss: [
        `${base}/**/*.scss`,
        `!${paths.bowerComponents}/**/*`
    ]
};

module.exports = {
    base: base,
    globs: globs,
    paths: paths,
    ports: ports
};
