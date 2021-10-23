exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.env = {
    production: {
        PUBLIC_PATH: '"/try-ui/"',
        DEFAULT_ROUTER: '"component-layout"'
    },
    development: {
        PUBLIC_PATH: '"/"',
        DEFAULT_ROUTER: '"component-layout"'
    }
}
