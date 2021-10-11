import input from './src/input'

input.install = (Vue) => {
    Vue.component(input.name, input);
}
export default input