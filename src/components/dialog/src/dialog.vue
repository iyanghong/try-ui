<template>
  <transition name="layer-visible"
              @after-leave="handleAfterLeave">
    <div class="t-dialog--wrapper"
         v-show="visible">
      <div class="t-dialog">
        <div class="t-dialog--header">
          <div class="t-dialog--title">
            <i :class="[iconClass,iconColor]"
               style="margin-right:5px"></i>
            <span v-text="title"></span>
          </div>
          <i class="t-icon-close t-dialog--icon"
             @click="close"></i>
        </div>
        <div class="t-dialog--body">
          {{content}}
        </div>
        <div class="t-dialog--footer">
          <t-button :size="size"
                    @click="handleNagetiveClick">{{ negativeText }}</t-button>
          <t-button :type="type"
                    :size="size"
                    @click="handlePositiveClick">{{ positiveText }}</t-button>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
import { typeMap } from '@src/config';
export default {
  name: 'TDialog',
  data () {
    return {
      visible: false,
      title: '',
      content: '',
      size: 'small',
      type: 'success',
      negativeText: '算了',
      positiveText: '确认'
    }
  },
  created () { },
  computed: {
    iconClass () {
      return typeMap[this.type]
    },
    iconColor () {
      return `t-dialog--icon-${this.type}`
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    handleNagetiveClick () {
      this.close()
      this.onNegativeClick()
    },
    handlePositiveClick () {
      this.onPositiveClick()
    },
    handleAfterLeave () {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
