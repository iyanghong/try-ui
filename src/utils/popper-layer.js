export default {
    props: {
        visible: Boolean,
        placement: {
            type: String,
            default: 'bottom'
        },
        placementOffset: {
            type: Number,
            default: 6
        }
    },
    watch: {
        visible() {
            this.updatePopper();
        }
    },
    computed: {
        $_layer() {
            return this.$refs.popperLayer
        }
    },
    mounted() {
        this.updatePopper();
        this.createPopperLayer();
    },
    methods: {
        togglePopper() {

        },
        createPopperLayer() {
            if (this.$_layer) {
                let body = document.querySelector('body');
                if (body.append) {
                    body.append(this.$_layer);
                } else {
                    body.appendChild(this.$_layer);
                }
            }
        },
        updatePopper() {
            if (this.$_layer) {
                let parentRect = this.$parent.$el.getBoundingClientRect();
                this.$_layer.style.position = 'absolute';
                let left = parentRect.x;
                let top = parentRect.y;
                switch (this.placement) {
                    case 'top':
                        top = top - this.$_layer.getBoundingClientRect().height - this.placementOffset;
                        break;
                    case 'bottom':
                        top = top + parentRect.height + this.placementOffset;
                        break;
                }
                this.$_layer.style.left = left + 'px';
                this.$_layer.style.top = top + 'px';
                this.$_layer.style.display = this.visible ? 'block' : 'none';
            }
        }
    }
}
