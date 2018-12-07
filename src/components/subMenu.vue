<template>
  <el-submenu :index="path">
    <template slot="title">
      {{data.name}}
    </template>
    <template v-for="item in data.children">
      <template v-if="item.meta.visible">
        <el-menu-item v-if="!item.children" :key="item.key" :index="`${path}/${item.path}`">{{item.name}}</el-menu-item>
        <sub-menu v-else :data="item" :path="`${path}/${item.path}`" :key="item.key"></sub-menu>
      </template>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: "sub-menu",
  props: {
    data: {
      type: Object
    },
    path: {
      type: String
    }
  }
};
</script>