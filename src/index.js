import Input from './components/input/index.js';
import Button from './components/button/index.js';
import ButtonGroup from './components/button-group/index.js';
import Tooltip from './components/tooltip/index.js';
import Col from './components/col/index.js';
import Row from './components/row/index.js';
import Space from './components/space/index.js';
import Scrollbar from './components/scrollbar/index.js';
import Select from './components/select/index.js';
import Tag from './components/tag/index.js';
import Alert from './components/alert/index.js';
import Message from './components/message/index.js';
import Modal from './components/modal/index.js';
import Dialog from './components/dialog/index.js';

const components = [
  Input,
    Button,
    ButtonGroup,
    Tooltip,
    Col,
    Row,
    Space,
    Scrollbar,
    Select,
    Tag,
    Alert,
    Message,
    Modal,
    Dialog
];


const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);

  });
  Vue.prototype.$message = Message;
  Vue.prototype.$dialog = Dialog;
}


export default {
  version: '0.0.1',
  install,
  Input,
    Button,
    ButtonGroup,
    Tooltip,
    Col,
    Row,
    Space,
    Scrollbar,
    Select,
    Tag,
    Alert,
    Message,
    Modal,
    Dialog
}
