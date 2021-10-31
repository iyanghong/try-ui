<template>
  <transition :name="transitionName"
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
const placementMap = {
  "top-center": 't-message-center',
  "top-left": 't-message-left-right',
  "top-right": 't-message-left-right',
  "bottom-center": 't-message-center',
  "bottom-left": 't-message-left-right',
  "bottom-right": 't-message-left-right'
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
      showClose: false,
      center: false,
      placement: 'top-center'
    }
  },
  computed: {
    positionStyle () {
      return this.placement.includes('top') ? { top: `${this.verticalOffset}px`, transition: 'opacity .3s,transform .4s,top .4s' } : { bottom: `${this.verticalOffset}px`, transition: 'opacity .3s,transform .4s,bottom .4s' }
    },
    iconClass () {
      return this.type ? typeMap[this.type] : typeMap.info
    },
    transitionName () {
      return placementMap[this.placement]
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
