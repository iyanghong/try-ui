<template>
    <div :class="[
    type === 'textarea' ? 't-textarea' : 't-input',
    status ? 't-'+status  : '',
    size ? 't-input--' + size : '',
    {
      't-input--disabled' : disabled,
      't-input-group': $slots.prepend || $slots.append,
      't-input-group--append': $slots.append,
      't-input-group--prepend': $slots.prepend,
      't-input--group-prefix' : $slots.prepend || prefixIcon,
      't-input--group-suffix' : $slots.suffix || suffixIcon
    }
  ]">
        <template v-if="type === 'textarea'">
            <textarea v-bind="$attrs" :disabled="disabled"></textarea>
        </template>
        <template v-else>
            <!-- 前置元素-->
            <div class="t-input--prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="t-input--prefix" v-if="$slots.prefix || prefixIcon">
                <slot name="prefix"></slot>
                <i v-if="prefixIcon" :class="prefixIcon">
                </i>
            </div>
            <input
                class="t-input--inner"
                ref="input"
                :disabled="disabled"
                :readonly="readonly"
                v-bind="$attrs"
                :type="type"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
            >
            <div class="t-input--suffix" v-if="$slots.suffix || suffixIcon">
                <slot name="prefix"></slot>
                <i v-if="suffixIcon" :class="suffixIcon">
                </i>
            </div>
            <!-- 后置元素-->
            <div class="t-input--append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
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
        status: String,
        suffixIcon: String,
        prefixIcon: String
    },
    data() {
        return {}
    },
    created() {
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        handleFocus(e) {
            this.$emit('focus', e.target.value);
        },
        handleBlur(e) {
            this.$emit('blur', e.target.value);
        },
        handleChange(e) {
            this.$emit('change', e.target.value);
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea;
        },
        setInputValue() {
            const input = this.getInput();
            if (!input) return;
            input.value = this.value;
        }
    }
}
</script>
