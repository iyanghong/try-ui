<template>
  <transition name="layer-visible">
    <div class="t-modal--wrapper"
         v-show="visible"
         @click.self="handleClickWrapper">
      <div class="t-modal"
           :ref="popupKey"
           :style="style">
        <div class="t-modal--header">

          <div class="t-modal--title">
            <i v-show="showIcon"
               style="margin-right:5px"
               :class="[iconClass,iconColor]"></i>
            <slot name="title"
                  v-if="$slots.title"></slot>
            <span v-else
                  v-text="title"></span>
          </div>
          <button type="button"
                  class="t-modal--close"
                  aria-label="Close"
                  v-if="showClose"
                  @click="handleClose">
            <i class="t-icon-close"></i>
          </button>
        </div>

        <div class="t-modal--body">
          <slot v-if="$slots.default"></slot>
          <span v-else>{{content}}</span>
        </div>

        <div class="t-modal--footer">
          <div v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
          <div v-else-if="preset === 'dialog'">
            <t-button :size="size"
                      @click="handleNagetiveClick">{{ negativeText }}</t-button>
            <t-button :type="type"
                      :size="size"
                      @click="handlePositiveClick">{{ positiveText }}</t-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { typeMap } from '@src/config';
export default {
  name: "TModal",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: String,
    height: String,
    title: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: "15vh"
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    fullscreen: Boolean,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    preset: String,
    content: String,
    positiveText: {
      type: String,
      default: "确认"
    },
    negativeText: {
      type: String,
      default: "算了"
    },
    size: {
      type: String,
      default: "small"
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: {
      type: String,
      default: 'success'
    }
  },
  data () {
    return {
      closed: false,
      popupKey: "t-model-layer-" + new Date().getTime()
    };
  },
  watch: {
    visible (val) {
      if (val) {
        this.closed = false;
        this.$emit("open");
        this.$nextTick(() => {
          this.$refs[this.popupKey].scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        if (!this.closed) this.$emit("close");
      }
    }
  },
  computed: {
    style () {
      let style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
        if (this.height) {
          style.height = this.height;
        }
      }
      return style;
    },
    iconClass () {
      return this.icon ? this.icon : typeMap[this.type]
    },
    iconColor () {
      return `t-modal--icon-${this.type}`
    }
  },
  mounted () {
    if (this.visible) {
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  methods: {
    handleClose () {
      this.hide();
    },
    open () {
      this.$emit("update:visible", true);
    },
    hide (cancel) {
      if (cancel !== false) {
        this.$emit("update:visible", false);
        this.$emit("close");
        this.closed = true;
      }
    },
    handleClickWrapper () {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleNagetiveClick () {
      this.hide();
      this.$emit("nagetive-click");
    },
    handlePositiveClick () {
      this.hide();
      this.$emit("positive-click");
    }
  },
  destroyed () {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
