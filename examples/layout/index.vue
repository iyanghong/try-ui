<template>
    <div class="examples-layout">
        <main-header></main-header>
        <side-nav :data="navList"></side-nav>
        <t-scrollbar :class="['container', isMarkdown ? 'markdown-body' : '',componentsClass]">
            <router-view></router-view>
        </t-scrollbar>
    </div>
</template>

<script>
import NavConfig from '../nav.config.json'

export default {
    name: "index",
    data() {
        return {
            navList: NavConfig['zh-CN']
        }
    },
    computed: {
        isMarkdown() {
            return this.$route.meta.isMarkdown;
        },
        componentsClass() {
            return 'demo-' + this.$route.path.slice(1).replace('/', '-') + '-body';
        }
    },
    created() {
    },
    methods: {}

}
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

.examples-layout {
    display: flex;
    flex-wrap: nowrap;

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        color: #1f2f3d;
    }

    .side-nav {
        top: 61px;
    }

    .container {
        width: calc(100vw - 200px);
        height: calc(100vh - 60px);
        margin-left: 200px;
        margin-top: 60px;
        padding: 20px;
        box-sizing: border-box;
    }
}
</style>
