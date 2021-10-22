<template>
    <div :class="['t-scrollbar--bar',vertical ? 'is-vertical':'is-horizontal']">
        <div class="t-scrollbar--thumb" ref="thumb" :style="getGetThumbStyle()" @mousedown="handleThumb"></div>
    </div>
</template>

<script>
import {EventListener} from '../../../utils/util'

const STYLE_MAP = {
    vertical: {
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top'
    },
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left'
    }
};
export default {
    name: "bar",
    props: {
        vertical: Boolean,
        move: Number,
        size: String
    },
    data() {
        return {
            mouseClickDown: false
        }
    },
    computed: {
        bar() {
            return this.vertical ? STYLE_MAP.vertical : STYLE_MAP.horizontal
        },
        wrap() {
            return this.$parent.wrap;
        }
    },
    created() {
    },
    methods: {
        getGetThumbStyle() {
            let style = {};
            style[this.bar.size] = this.size;
            style.transform = `translate${this.bar.axis}(${this.move}%)`;
            return style;
        },
        handleThumb(e) {
            if (e.ctrlKey || e.button === 2) {
                return;
            }
            this.mouseClickDown = true;
            this._Mousemove = EventListener.listen(document, 'mousemove', this.handleMouseMove);
            this._Mouseup = EventListener.listen(document, 'mouseup', this.handleMouseUp)
            document.onselectstart = () => false;
            this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
        },
        handleMouseUp(e) {
            this.mouseClickDown = false;
            this[this.bar.axis] = 0;
            if (this._Mousemove) {
                this._Mousemove.remove();
            }
            if (this._Mouseup) {
                this._Mouseup.remove();
            }
        },
        handleMouseMove(e) {
            if (this.mouseClickDown === false) return;
            let preAxis = this[this.bar.axis];
            if (!preAxis) return;
            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
            const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - preAxis);
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);

            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        }
    }
}
</script>

