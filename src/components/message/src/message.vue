<template>
  <transition name="t-message-fade"
              @after-leave="handleAfterLeave">
    <div v-show="visible"
         class="t-message"
         :style="positionStyle"
         :class="[ type?`t-message--${type}`:'' ,center ? 'is-center' : '']"
         @mouseenter="clearTimer"
         @mouseleave="startTimer">
      <i v-if="showIcon"
         class="t-message--icon"
         :class="icon||iconClass"></i>
      <slot>
        <p class="t-message--content">{{ message }}</p>
      </slot>
      <div v-if="showClose"
           class="t-message--close">
        <i class="t-icon-close"
           @click="close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  "success": "t-icon-success-fill",
  "warning": "t-icon-warning-fill",
  "info": "t-icon-info-circle-fill",
  "danger": "t-icon-error-fill"
}
export default {
  name: 'TMessage',
  data () {
    return {
      visible: false,
      message: '',
      verticalOffset: 20,
      closed: false,
      duration: 3000,
      timer: null,
      type: 'info',
      showIcon: true,
      icon: '',
      showClose: true,
      center: false
    }
  },
  computed: {
    positionStyle () {
      return { 'top': `${this.verticalOffset}px` }
    },
    iconClass () {
      return this.type ? typeMap[this.type] : typeMap.info
    }
  },
  mounted () {
    this.startTimer()
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration)
      }
    },
    clearTimer () {
      clearTimeout(this.timer);
    },
    close () {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    handleAfterLeave () {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
