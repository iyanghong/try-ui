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

<style lang="scss">
.t-input--inner {
  width: 100%;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  outline: none;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;

  &:hover, &:focus {
    border-color: #79a1eb;
  }
}
.t-success {
  .t-input--inner {
    border-color: $success;
    &:hover, &:focus {
      border-color: $success;
    }
  }
}
.t-input--disabled .t-input--inner {
  color: #b1b1b1;
  background-color: #f7f7f7;
  border-color: #ececec;
  cursor: not-allowed;
}
</style>