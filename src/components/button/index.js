import TButton from './src/button.vue';

TButton.install = (Vue) => {
	Vue.component(TButton.name, TButton);
};
export default TButton;
