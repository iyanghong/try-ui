const fs = require("fs")
const path = require('path');
const components = require('../components.json');
const render = require('json-templater/string');
const getParams = require('./utils/get-params.js');
const upperCamelCase = require('./utils/upper-camelcase.js');
const componentBasePath = path.resolve(process.cwd(), './src/components');
let nameStr = process.argv[2];

if (!nameStr) {
    return false;
}
const params = getParams(process.argv, 3, false)

let nameArray = nameStr.split('/');
let groupName = '';
let name = '';
if (nameArray.length === 1) {
    name = nameArray[0]
} else if (nameArray.length > 1) {
    groupName = nameArray[0];
    name = nameArray[1];
}
let nameCamelCase = upperCamelCase(name, '-');

// eslint-disable-next-line no-prototype-builtins
if (components.hasOwnProperty(name)) {
    console.log('已存在该组件')
    return false;
}


const componentIndexTemplate = `import T{{name}} from './src/{{fileName}}.vue';

T{{name}}.install = (Vue) => {
    Vue.component(T{{name}}.name, T{{name}});
};

export default T{{name}};
`;
const componentContentTemplate = `<template>
    <div class="t-{{name}}"></div>
</template>

<script>
export default {
    name: 'T{{nameCamelCase}}',
    data() {
        return {}
    },
    created() {}
}
</script>
`;

if (!fs.existsSync(path.join(componentBasePath, name))) {
    fs.mkdirSync(path.join(componentBasePath, name));
}
if (!fs.existsSync(path.join(componentBasePath, `${name}/src`))) {
    fs.mkdirSync(path.join(componentBasePath, `${name}/src`));
}
//生成组件基本内容
let componentContentOutputPath = path.join(componentBasePath, `${name}/src/${name}.vue`);
if (fs.existsSync(componentContentOutputPath)) {
    console.warn(`File ${componentContentOutputPath} already exists`)
} else {
    let content = render(componentContentTemplate, {
        name,
        nameCamelCase
    });
    fs.writeFileSync(componentContentOutputPath, content);
    console.log(`File ${componentContentOutputPath} generated successfully!`);
}
//生成入口文件
let componentIndexOutputPath = path.join(componentBasePath, `${name}/index.js`);
if (fs.existsSync(componentIndexOutputPath)) {
    console.warn(`File ${componentIndexOutputPath} already exists`)
} else {
    let content = render(componentIndexTemplate, {
        fileName: name,
        name: nameCamelCase
    })
    fs.writeFileSync(componentIndexOutputPath, content);
    console.log(`File ${componentIndexOutputPath} generated successfully!`);
}

let componentThemeOutputPath = path.resolve(process.cwd(), `./src/theme/${name}.scss`);
if (!fs.existsSync(componentThemeOutputPath)) {
    fs.writeFileSync(componentThemeOutputPath, '');
}

//写入components.json文件
components[name] = `./components/${name}/index.js`;

let componentJsonTemplate = `{
    {{list}}
}`;
let list = [];

for (let k in components) {
    list.push(render(`"{{name}}": "{{path}}"`, {
        name: k,
        path: components[k]
    }))
}

let componentJsonContent = render(componentJsonTemplate, {
    list: list.join(',\n    ')
});
fs.writeFileSync(path.resolve(process.cwd(), './components.json'), componentJsonContent)
console.log(`Component ${name} was created and initialized successfully!`);
