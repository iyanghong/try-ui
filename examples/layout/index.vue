<template>
  <div class="examples-layout">
    <main-header></main-header>
    <side-nav :data="navList"></side-nav>
    <div class="container">
      <router-view></router-view>
    </div>
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
  created() {
    console.log(this.navList)
  }

}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.examples-layout {
  display: flex;
  flex-wrap: nowrap;

  .side-nav {
    top: 61px;
  }

  .container {
    width: 100%;
    margin-left: 200px;
    margin-top: 60px;
    padding: 20px;
  }
}
</style>