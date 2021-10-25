<template>
    <transition name="fade">
        <div class="t-alert">

        </div>
    </transition>
</template>

<script>
export default {
    name: 'TAlert',
    props: {
        title: String,
        type: {
            type: String,
            default: 'info'
        },
        description: String,
        closable: Boolean,
        showIcon: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {}
    },
    created() {
    }
}
</script>
