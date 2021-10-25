<template>
    <div class="t-select" :class="size ? 't-select--' + size : ''" @click.stop="handleClick"
         v-click-out-side="handleClose">
        <template v-if="multiple">

        </template>
        <span class="t-select--value" v-else v-text="value"></span>
        <input
            type="hidden"
            ref="selectValue"
            v-bind="$attrs"
        >
        <span class="t-select--icon" :class="isDropdown ? 'is-dropdown' : ''"><i
            class="t-icon-list-arrow-down"></i></span>

        <options-layer :visible="isDropdown">
            <ul class="t-select--options">
                <template v-if="items">
                    <t-option
                        v-for="(item,index) in items"
                        :class="item.value === value ? 'is-selected' : ''"
                        :key="index"
                        :value="item.value">
                        {{ item.label || item.value }}
                    </t-option>
                </template>
            </ul>
        </options-layer>
    </div>
</template>

<script>
import TOption from './option.vue';
import ClickOutSide from '../../../utils/click-out-side.js';
import Dispatch from '../../../mixins/dispatch.js'
import OptionsLayer from './options-layer.vue';

export default {
    name: 'TSelect',
    props: {
        size: {
            type: String,
            default: ''
        },
        value: {
            required: true
        },
        items: Array,
        multiple: Boolean,
        multipleNumber: {
            type: Number,
            default: 0
        }
    },
    components: {
        TOption,
        OptionsLayer
    },
    mixins: [
        Dispatch
    ],
    directives: {ClickOutSide},
    data() {
        return {
            isDropdown: false,
            inputWidth: 0,
            multipleArray: []
        }
    },
    created() {
        this.resetInputWidth();
    },
    methods: {
        handleClick() {
            this.isDropdown = !this.isDropdown;
        },
        handleClose() {
            this.isDropdown = false;
        },
        handleSetSelect(value) {
            this.$emit('input', value);
            this.$refs.selectValue.value = value;
        },
        resetInputWidth() {
            this.$nextTick(() => {
                this.inputWidth = this.$el.getBoundingClientRect().width;
            });
        }
    }
}
</script>
