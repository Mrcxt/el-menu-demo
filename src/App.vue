<template>
  <div id="app">
    <i-demo></i-demo>
  </div>
</template>

<script>
import iDemo from "./views/Demo";

export default {
  data() {
    return {};
  },
  components: {
    iDemo
  }
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
.el-scrollbar {
  height: 100%;
  & .el-scrollbar__view {
    height: 100%;
  }
}
</style>
