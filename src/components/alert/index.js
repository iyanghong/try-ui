import TAlert from './src/alert.vue';

TAlert.install = (Vue) => {
    Vue.component(TAlert.name, TAlert);
};

export default TAlert;
