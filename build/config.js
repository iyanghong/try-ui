exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.env = {
    production: {
        PUBLIC_PATH: '"/try-ui/"'
    },
    development: {
        PUBLIC_PATH: '"/"'
    }
}
