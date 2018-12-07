<template>
  <div class="demo">
    <el-scrollbar>
      <el-container class="wh">
        <el-header>
          <menu-group :settings="settings_1"></menu-group>
        </el-header>
        <el-container class="wh">
          <el-aside width="250px">
            <menu-group :settings="settings_2"></menu-group>
          </el-aside>
          <el-main>
            <el-card>
              <div slot="header">
                <span>router JSON</span>
              </div>
              <pre class="language-js">
                <code>
                  [
                    {
                        "path": "/menu_0",
                        "name": "menu_0",
                        "meta": {
                            "visible": true
                        }
                    },
                    {
                        "path": "/menu_1",
                        "name": "menu_1",
                        "meta": {
                            "visible": true
                        }
                    },
                    {
                        "path": "/menu_2",
                        "name": "menu_2",
                        "meta": {
                            "visible": true
                        }
                    },
                    {
                        "path": "/menu_3",
                        "name": "menu_3",
                        "meta": {
                            "visible": true
                        }
                    },
                    {
                        "path": "/menu_4",
                        "name": "menu_4",
                        "meta": {
                            "visible": true
                        },
                        "children": [
                            {
                                "path": "menu_4_1",
                                "name": "menu_4_1",
                                "meta": {
                                    "visible": true
                                }
                            },
                            {
                                "path": "menu_4_2",
                                "name": "menu_4_2",
                                "meta": {
                                    "visible": true
                                },
                                "children": [
                                    {
                                        "path": "menu_4_2_1",
                                        "name": "menu_4_2_1",
                                        "meta": {
                                            "visible": true
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                </code>
              </pre>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
import MenuGroup from "../components/MenuGroup";

export default {
  components: {
    "menu-group": MenuGroup
  },
  data() {
    return {
      settings_1: {
        mode: "horizontal",
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b"
      },
      settings_2: {
        mode: "vertical",
        backgroundColor: "#ffffff",
        textColor: "#303133",
        activeTextColor: "#409EFF"
      }
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.wh {
  width: 100%;
  height: 100%;
}
.demo {
  height: 100vh;
  .el-header,
  .el-aside,
  .el-main {
    padding: 0;
  }
}
</style>
