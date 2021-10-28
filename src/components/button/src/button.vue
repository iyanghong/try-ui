<template>
  <button :type="nativeType"
          :class="[
			't-button',
			type ? 't-button--' + type : 't-button--default',
			size ? 't-button--' + size : '',
			{
				'is-disabled' : disabled,
				'is-round' : round,
				'waves-effect waves-light':waves
			}
		]"
          @click="handleClick">
    <i :class="icon"
       v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Waves from 'node-waves'
import 'node-waves/dist/waves.min.css'

export default {
  name: "TButton",
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    },
    waves: {
      type: Boolean,
      default: true
    },
    round: Boolean
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    Waves.attach('.waves-effect', ['waves-effect', 'waves-light']);
    Waves.init();
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
