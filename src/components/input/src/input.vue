<template>
  <div :class="[
    type === 'textarea' ? 't-textarea' : 't-input',
    status ? 't-'+status  : '',
    {
      't-input--disabled' : disabled,

    }
  ]">
    <template v-if="type === 'textarea'">
      <textarea v-bind="$attrs" :disabled="disabled"></textarea>
    </template>
    <template v-else>
      <!-- 前置元素-->
      <div class="t-input-group--prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input class="t-input--inner" :disabled="disabled" v-bind="$attrs" :type="type">
    </template>
  </div>
</template>

<script>
export default {
  name: "TInput",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    size: String,
    status: String
  },
  data() {
    return {}
  },
  created() {
  }
}
</script>