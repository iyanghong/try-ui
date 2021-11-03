import Vue from 'vue';
import Main from './dialog.vue';
const DialogConstructor = Vue.extend(Main);
let example;
let seed = 1;
const Dialog = function (options) {
  options = options || {};
  let id = 'dialog' + seed++;
  example = new DialogConstructor({
    data: options
  });

  example.id = id
  example.$mount()
  document.body.appendChild(example.$el);
  example.visible = true;
  example.$el.style.zIndex = 2003
  return example
}
export default Dialog
