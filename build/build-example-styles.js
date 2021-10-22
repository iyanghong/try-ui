const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const EXAMPLE_STYLE_PATH = path.resolve(process.cwd(), './examples/styles');
const STYLE_TEMPLATE = `@import "{{name}}";`
const OUTPUT_PATH = path.resolve(process.cwd(), './examples/styles/index.scss');

const files = fs.readdirSync(EXAMPLE_STYLE_PATH)
let componentStyle = [];
files.forEach(function (name, index) {
    if (name !== 'index.scss') {
        componentStyle.push(render(STYLE_TEMPLATE, {
            name
        }))
    }
})

fs.writeFileSync(OUTPUT_PATH, componentStyle.join('\n'));
console.log('[build example style entry] DONE:', OUTPUT_PATH);
