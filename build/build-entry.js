const fs = require('fs');
const path = require('path');
const render = require('json-templater/string');
const components = require('../components.json');
const upperCamelcase = require('./utils/upper-camelcase.js');
const template = fs.readFileSync(path.resolve(__dirname, './template/index.tpl'));
const packages = require('../package.json');
const COMPONENT_TEMPLATE = `import {{name}} from '{{path}}';`;
const OUTPUT_PATH = path.resolve(process.cwd(), './src/index.js');

let componentNames = [];
let componentsIncludeTemplate = [];

for (let key in components) {
    let name = upperCamelcase(key, '-');
    componentNames.push(name);
    componentsIncludeTemplate.push(render(COMPONENT_TEMPLATE, {
        name,
        path: components[key]
    }))
}

let entryContent = render(template.toString(), {
    include: componentsIncludeTemplate.join('\n'),
    components: componentNames.join(',\n    '),
    version: packages.version
});

fs.writeFileSync(OUTPUT_PATH, entryContent);
console.log('[build entry] DONE:', OUTPUT_PATH);
