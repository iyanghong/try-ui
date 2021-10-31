import Vue from 'vue';
import Main from './message.vue';
import { isVNode } from '../../../utils/types';
let MessageConstructor = Vue.extend(Main);
let example;
let examples = [];
let seed = 1;
let placement
let isTop
const Message = function (options) {

  placement = options.placement === undefined ? 'top-center' : options.placement
  isTop = placement.includes("top")
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let id = 'message_' + seed++;
  let userOnClose = options.onClose;
  options.onClose = function () {
    Message.close(id, userOnClose, placement);
  };

  example = new MessageConstructor({
    data: options
  });

  example.id = id
  if (isVNode(example.message)) {
    example.$slots.default = [example.message]
    example.message = null
  }
  example.$mount()
  document.body.appendChild(example.$el);
  let verticalOffset = options.offset || 20;
  examples.push(example)
  examples.forEach(item => {
    let classList = item.$el.classList
    verticalOffset += item.$el.offsetHeight + 16;
    classList.remove(classList[2]);
    classList.add(`t-message--${placement}`)
    if (isTop && item.$el.style.bottom != "") {
      item.$el.style.top = item.$el.style.bottom
      item.$el.style.bottom = ""
    } else if (!isTop && item.$el.style.top != "") {
      item.$el.style.bottom = item.$el.style.top
      item.$el.style.top = ""
    }
  });
  example.verticalOffset = verticalOffset;
  example.visible = true;
  example.$el.style.zIndex = 2001
  // example.$el.classList.add(`t-message--${placement}`)
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
    isTop ? dom.style.top = (parseInt(dom.style.top, 10) - removedHeight - 16) + 'px' : dom.style.bottom = (parseInt(dom.style.bottom, 10) - removedHeight - 16) + 'px'
  }
}
Message.closeAll = function () {
  for (let i = examples.length - 1; i >= 0; i--) {
    examples[i].close();
  }
};

export default Message
