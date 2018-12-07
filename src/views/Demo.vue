<template>
  <div class="demo">
    <el-container>
      <el-header>
        <menu-group :settings="settings_1"></menu-group>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <menu-group :settings="settings_2"></menu-group>
        </el-aside>
        <el-main>
          <el-form>
            <el-form-item label="router">
              <el-input :value="stringifyRouterData" type="textarea" :rows="25" @change="onInputChange"></el-input>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-container>

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
        backgroundColor: "#ffffff",
        textColor: "#303133",
        activeTextColor: "#409EFF"
      },
      settings_2: {
        mode: "vertical",
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b"
      },
      //
      form: {
        router_data: [
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
      }
    };
  },
  computed: {
    stringifyRouterData() {
      return JSON.stringify(this.form.router_data);
    }
  },
  created() {},
  methods: {
    onInputChange(val) {
      try {
        this.form.router_data = JSON.parse(val);
      } catch (error) {
        this.$message.error({
          message: "必须为数组",
          center: true
        });
      }
    }
  }
};
</script>

<style scoped>
</style>