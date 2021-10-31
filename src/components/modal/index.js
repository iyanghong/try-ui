import TModal from './src/modal.vue';

TModal.install = (Vue) => {
    Vue.component(TModal.name, TModal);
};

export default TModal;
