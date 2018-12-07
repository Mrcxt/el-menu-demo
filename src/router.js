import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/menu_0',
            name: 'menu_0',
            meta: {
                visible: true
            }
        }, {
            path: '/menu_1',
            name: 'menu_1',
            meta: {
                visible: true
            }
        }, {
            path: '/menu_2',
            name: 'menu_2',
            meta: {
                visible: true
            }
        }, {
            path: '/menu_3',
            name: 'menu_3',
            meta: {
                visible: true
            }
        },
        {
            path: '/menu_4',
            name: 'menu_4',
            meta: {
                visible: true,
            },
            children: [{
                path: 'menu_4_1',
                name: 'menu_4_1',
                meta: {
                    visible: true,
                },
            }, {
                path: 'menu_4_2',
                name: 'menu_4_2',
                meta: {
                    visible: true,
                },
                children: [{
                    path: 'menu_4_2_1',
                    name: 'menu_4_2_1',
                    meta: {
                        visible: true,
                    },
                }]
            }, ]
        }
    ]
})