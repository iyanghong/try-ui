<template>
    <li class="t-option">
        <span @click="handleClick"><slot></slot></span>
    </li>
</template>

<script>
import Dispatch from '../../../mixins/dispatch.js'

export default {
    name: "TOption",
    props: {
        value: {
            required: true
        },
        label: [String, Number]
    },
    mixins: [Dispatch],
    data() {
        return {}
    },
    created() {
    },
    methods: {
        handleClick() {
            this.dispatch('TSelect', 'handleSetSelect', this.value);
        }
    }
}
</script>
