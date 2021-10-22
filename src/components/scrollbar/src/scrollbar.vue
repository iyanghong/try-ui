<template>
    <div :class="[
        't-scrollbar',
        vertical ? 'is-vertical':'is-horizontal'
    ]">
        <div class="t-scrollbar--wrap" ref="wrap" @scroll="handleScroll">
            <div class="t-scrollbar--view">
                <slot></slot>
            </div>
        </div>
        <bar :size="barSizeWidth" :move="moveX"></bar>
        <bar :vertical="true" :size="barSizeHeight" :move="moveY"></bar>
    </div>
</template>

<script>
import Bar from './bar.vue';

export default {
    name: "TScrollbar",
    props: {
        vertical: {
            type: Boolean,
            default: true
        }
    },
    components: {
        Bar
    },
    data() {
        return {
            barSizeHeight: '',
            barSizeWidth: '',
            moveY: 0,
            moveX: 0
        }
    },
    created() {
    },
    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.update()
        });
    },
    methods: {
        update() {
            let wrap = this.wrap;
            let heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
            let widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
            this.barSizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
            this.barSizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';

        },
        handleScroll() {
            let wrap = this.wrap;
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
        }
    }
}
</script>
