import Input from './components/input'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import TTooltip from './components/tooltip';
const components = [
	Input,
	Button,
	ButtonGroup,
	TTooltip
];

const install = (Vue) => {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
}

export default {
	version: '0.0.1',
	install,
	Input,
	Button
}
