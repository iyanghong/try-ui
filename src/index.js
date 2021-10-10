import Input from './components/input'

const components = [
    Input
];

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

export default {
    version: '0.0.1',
    install,
    Input
}