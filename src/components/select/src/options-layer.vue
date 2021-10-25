<template>
    <div class="t-options--layer" ref="popperLayer" :style="{'min-width':minWidth}">
        <slot></slot>
    </div>
</template>

<script>
import popperLayer from '../../../utils/popper-layer.js';

export default {
    name: "TOptionsPopperLayer",
    mixins: [popperLayer],
    data() {
        return {
            minWidth: ''
        }
    },
    watch: {
        '$parent.inputWidth'() {
            this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
        }
    },
    created() {
    },
    computed: {},
    mounted() {
    },
    methods: {}
}
</script>
