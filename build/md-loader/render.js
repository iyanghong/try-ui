const Render = require('markdown-it-chain');
const container = require('./container');

const render = new Render();

render.options.html(true).end()
	.plugin('containers').use(container).end();



module.exports = render.toMd();
