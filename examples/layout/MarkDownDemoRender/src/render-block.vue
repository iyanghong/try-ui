<template>
    <div :class="['demo-block',blockClass]">
        <div class="demo-block-source">
            <slot name="source"></slot>
        </div>
        <div class="demo-block-control">
			<span class="demo-block-code-icon" @click="showCode=!showCode">
        <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
             class="code-expand-icon-show"></span>
        </div>
        <div class="demo-block-code"
             v-show="showCode">
            <div class="demo-block-description" v-if="$slots.default">
                <slot></slot>
            </div>
            <div class="highlight" v-highlight>
                <slot name="highlight"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "render-block",
    data() {
        return {
            showCode: false,
            demoComponent: null
        }
    },
    computed: {
        blockClass() {
            return `demo-${this.$router.currentRoute.path.split('/').pop()}`;
        }
    },
    created() {
    }
}
</script>

<style lang="scss">
.demo-block {
    border: 1px solid #ebedf0;
    border-radius: 2px;
    display: block;
    width: calc(100% - 32px);
    position: relative;
    margin: 16px 16px 16px 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    box-sizing: border-box;

    &.hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }

    .demo-button {
        float: right;
    }

    p {
        padding: 0;
        margin: 0;
    }


    .demo-block-code-icon {
        position: absolute;
        right: 16px;
        bottom: 14px;
        cursor: pointer;
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;

        img {
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
            max-width: 100%;
            width: 100%;
            vertical-align: baseline;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
    }

    .demo-block-source {
        border-bottom: 1px solid #ebedf0;
        padding: 20px 24px 20px;
        color: #444;
        position: relative;
        margin-bottom: -1px;
    }

    .demo-block-meta {
        position: relative;
        padding: 12px 50px 12px 20px;
        border-radius: 0 0 2px 2px;
        -webkit-transition: background-color 0.4s;
        transition: background-color 0.4s;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        color: #444;
        line-height: 2;
        border-bottom: 1px dashed #ebedf0;
        margin-bottom: -1px;

        code {
            color: #444;
            background-color: #e6effb;
            margin: 0 4px;
            display: inline-block;
            padding: 3px 7px;
            border-radius: 3px;
            height: 18px;
            line-height: 18px;
            font-family: Menlo, Monaco, Consolas, Courier, monospace;
            font-size: 14px;
        }
    }

    .demo-block-control {
        border-top: solid 1px #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
    }

    .demo-block-code {
        background-color: #f7f7f7;
        font-size: 0;
        overflow: auto;

        .demo-block-description {
            padding: 12px;
            box-sizing: border-box;
            border: solid 1px #ebebeb;
            border-radius: 3px;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            margin: 20px 20px 0 20px;
            background-color: #fff;

            p {
                margin: 0;
                line-height: 26px;
            }

            code {
                color: #5e6d82;
                background-color: #e6effb;
                margin: 0 4px;
                display: inline-block;
                padding: 1px 5px;
                font-size: 12px;
                border-radius: 3px;
                height: 18px;
                line-height: 18px;
            }
        }

        code {
            background-color: #f7f7f7;
            font-family: Consolas, Menlo, Courier, monospace;
            border: none;
            display: block;
            font-size: 14px;

            pre {
                margin: 0;
                padding: 0;
            }
        }
    }
}

.sh-checkbox {
    color: #444;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
}
</style>
