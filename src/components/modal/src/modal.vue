<template>
  <transition name="t-modal-layer-visible">
    <div
      class="t-modal--wrapper"
      v-show="visible"
      @click.self="handleClickWrapper"
    >
      <div
        class="t-modal"
        :ref="popupKey" :style="style"
      >
        <div class="t-modal--header">
          <slot name="title" v-if="$slots.title"></slot>
          <span class="t-modal--title" v-else v-text="title"></span>
          <button
            type="button"
            class="t-modal--close"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <i class="t-icon-close"></i>
          </button>
        </div>

        <div class="t-modal--body">
          <slot></slot>
        </div>

        <div class="t-modal--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: String,
    height: String,
    title: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '15vh'
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    fullscreen: Boolean,
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      closed: false,
      popupKey: 't-model-layer-' + new Date().getTime()
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$nextTick(() => {
          this.$refs[this.popupKey].scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        if (!this.closed) this.$emit('close');
      }
    }
  },
  computed: {
    style() {
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
    }
  },
  mounted() {
    if (this.visible) {
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },
  created() {
  },
  methods: {
    handleClose() {
      this.hide();
    },
    open() {
      this.$emit('update:visible', true);
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    handleClickWrapper() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    }
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
