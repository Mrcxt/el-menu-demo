import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/menu_0",
      name: "menu_0",
      visible: false
    },
    {
      path: "/menu_1",
      name: "menu_1"
    },
    {
      path: "/menu_2",
      name: "menu_2"
    },
    {
      path: "/menu_3",
      name: "menu_3"
    },
    {
      path: "/menu_4",
      name: "menu_4",

      children: [
        {
          path: "menu_4_1",
          name: "menu_4_1"
        },
        {
          path: "menu_4_2",
          name: "menu_4_2",

          children: [
            {
              path: "menu_4_2_1",
              name: "menu_4_2_1"
            }
          ]
        }
      ]
    }
  ]
});
