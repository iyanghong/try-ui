{{include}}

const components = [
    {{components}}
];


const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}


export default {
    version: '{{version}}',
    install,
    {{components}}
}
