{{include}}

const components = [
  {{components}}
];


const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
    Vue.prototype.$message = Message;
  });
}


export default {
  version: '{{version}}',
  install,
  {{components}}
}
