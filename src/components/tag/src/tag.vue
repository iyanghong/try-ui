<template>
    <span :class="[
        't-tag',
        type ? 't-tag--' + type : '',
        size ? 't-tag--' + size : '',
        theme ? 't-tag--' + theme : ''
    ]">
        <slot></slot>
        <i v-if="closable" class="t-tag--close t-icon-close" @click="handleClickClose"></i>
    </span>
</template>

<script>
export default {
    name: 'TTag',
    props: {
        type: String,
        size: String,
        closable: Boolean,
        theme: String
    },
    data() {
        return {}
    },
    created() {
    },
    methods: {
        handleClickClose(event) {
            event.stopPropagation();
            this.$emit('close', event);
        }
    }
}
</script>
