<template>
    <transition name="fade">
        <div :class="[
            't-alert',
            type ? 't-alert--' + type : ''
        ]"
             v-if="visible"
        >
            <div class="t-alert--icon" v-if="showIcon">
                <i :class="icon || iconClass"></i>
            </div>
            <div class="t-alert--main">
                <div class="t-alert--title" v-if="title" v-text="title"></div>
                <div class="t-alert--content">
                    <slot></slot>
                </div>
            </div>
            <div class="t-alert--close" v-if="closable">
                <i class="t-icon-close" @click="handleClose"></i>
            </div>
        </div>
    </transition>
</template>

<script>
const ALERT_ICONS_MAP = {
    "success": "t-icon-success-fill",
    "warning": "t-icon-warning-fill",
    "info": "t-icon-info-circle-fill",
    "danger": "t-icon-error-fill"
}
export default {
    name: 'TAlert',
    props: {
        title: String,
        type: String,
        description: String,
        closable: Boolean,
        showIcon: {
            type: Boolean,
            default: true
        },
        icon: String
    },
    data() {
        return {
            visible: true
        }
    },
    computed: {
        iconClass() {
            return this.type ? ALERT_ICONS_MAP[this.type] : ALERT_ICONS_MAP.info
        }
    },
    created() {
    },
    methods: {
        handleClose() {
            this.visible = false;
            this.$emit('close')
        }
    }
}
</script>
