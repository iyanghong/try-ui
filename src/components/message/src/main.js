import Vue from 'vue';
import Main from './message.vue';
let MessageConstructor = Vue.extend(Main);
let example;
let examples = [];
let seed = 1;
const Message = function (options) {

  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let id = 'message_' + seed++;
  let userOnClose = options.onClose;
  options.onClose = function () {
    Message.close(id, userOnClose);
  };

  example = new MessageConstructor({
    data: options
  });

  example.id = id
  example.$mount()
  document.body.appendChild(example.$el);
  let verticalOffset = options.offset || 20;
  examples.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  example.verticalOffset = verticalOffset;
  example.visible = true;
  example.$el.style.zIndex = 2001
  examples.push(example)
  return example
}


Message.close = function (id, userOnClose) {
  const len = examples.length
  let removedHeight = 0
  let index = -1
  for (let i = 0; i < len; i++) {
    if (id === examples[i].id) {
      index = i
      removedHeight = examples[i].$el.offsetHeight
      if (typeof userOnClose === 'function') {
        userOnClose(examples[i]);
      }
      examples.splice(i, 1);
      break;
    }
  }
  if (len <= 0 || index === -1) return
  for (let i = index; i < len - 1; i++) {
    let dom = examples[i].$el
    dom.style.top = (parseInt(dom.style.top, 10) - removedHeight - 16) + 'px'

  }
}
Message.closeAll = function () {
  for (let i = examples.length - 1; i >= 0; i--) {
    examples[i].close();
  }
};

export default Message
