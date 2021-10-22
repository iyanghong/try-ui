const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const components = require('../components.json');
const STYLE_TEMPLATE = `@import "{{name}}.scss";`
const OUTPUT_PATH = path.resolve(process.cwd(), './src/theme/index.scss');
let componentStyle = [];
for (let name in components) {
    if (fs.existsSync(path.resolve(process.cwd(), `./src/theme/${name}.scss`))) {
        componentStyle.push(render(STYLE_TEMPLATE, {
            name
        }))
    }
}

fs.writeFileSync(OUTPUT_PATH, componentStyle.join('\n'));
console.log('[build theme entry] DONE:', OUTPUT_PATH);
