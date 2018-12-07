import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './registerServiceWorker'
import VuePrism from 'vue-prism'


import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'prismjs/themes/prism.css'

Vue.use(VuePrism)
Vue.use(ElementUI, {
    size: "mini"
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')