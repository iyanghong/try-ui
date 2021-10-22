import Input from './components/input'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import TTooltip from './components/tooltip';
import TCol from './components/col'
import TRow from './components/row';
import TSpace from './components/space';
import TScrollbar from './components/scrollbar';

const components = [
    Input,
    Button,
    ButtonGroup,
    TTooltip,
    TRow,
    TCol,
    TSpace,
    TScrollbar
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
    Button,
    ButtonGroup,
    TTooltip,
    TRow,
    TCol,
    TSpace,
    TScrollbar
}
