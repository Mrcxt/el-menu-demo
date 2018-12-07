# el-menu-demo

## demo

[demo](https://mrcxt.github.io/el-menu-demo/dist/index.html#/)

## vue 组件方式递归

> 以下代码可以直接复制使用，无序修改！
>
> 需要在 `router.js` 中增加 `meta:{visibale:true}`字段，用来控制是否要将该路径显示在菜单上。如果不需要，可将组价中的 `v-if`去除。

**封装组件**

首先需要建立一个`subMenu.vue`文件，然后写入以下代码：

```js <sub-menu>
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

```

**使用组件**

使用的时候也需要再次封装一下。

```js
<template>
  <el-menu :mode="settings.mode" :default-active="fullPath" router>
    <template v-for="(item, index) in routerList">
      <template v-if="item.meta.visible">
        <el-menu-item v-if="!item.children" :key="item.key" :index="item.path">{{item.name}}</el-menu-item>
        <sub-menu v-else :data="item" :path="item.path" :key="item.key"></sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script>
import SubMenu from "./subMenu";

export default {
  components: {
    "sub-menu": SubMenu
  },
  computed: {
    // router 数据
    routerList() {
      return this.$router.options.routes;
    },
    // 当前path路径
    fullPath() {
      return this.$route.fullPath;
    }
  }
};
</script>


<style lang="less">
</style>

```

**最后，router.js 代码结构：**

`path`：必须，路径
`name`：必须，将作为菜单名称
`children`：可选，根据是否有 children 来判断是否有子菜单
`meta.visible`：可选，根据 布尔值 判断是否显示此条菜单，默认不显示

```js
export default new Router({
  routes: [
    {
      path: "/menu_0",
      name: "menu_0",
      meta: {
        visible: true
      }
    },
    {
      path: "/menu_1",
      name: "menu_1",
      meta: {
        visible: true
      }
    },
    {
      path: "/menu_2",
      name: "menu_2",
      meta: {
        visible: true
      }
    },
    {
      path: "/menu_3",
      name: "menu_3",
      meta: {
        visible: true
      }
    },
    {
      path: "/menu_4",
      name: "menu_4",
      meta: {
        visible: true
      },
      children: [
        {
          path: "menu_4_1",
          name: "menu_4_1",
          meta: {
            visible: true
          }
        },
        {
          path: "menu_4_2",
          name: "menu_4_2",
          meta: {
            visible: true
          },
          children: [
            {
              path: "menu_4_2_1",
              name: "menu_4_2_1",
              meta: {
                visible: true
              }
            }
          ]
        }
      ]
    }
  ]
});
```
