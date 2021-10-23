<template>
    <li class="t-option">
        <span @click="handleClick"><slot></slot></span>
    </li>
</template>

<script>
export default {
    name: "TOption",
    props: {
        value: {
            required: true
        },
        label: [String, Number]
    },
    data() {
        return {}
    },
    created() {
    },
    methods: {
        handleClick() {

        }
    }
}
</script>
