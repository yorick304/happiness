// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as wdui from 'wdui'
import './utils/previewImage.js'
import {Store} from './store/index.js'
Vue.config.productionTip = false

Vue.use(wdui)
/* eslint-disable no-new */
Store.indexData().then((data) => {
  window.IndexData = data
  new Vue({
    el: '#app',
    router,
    render() {
      return (
        <App/>
      )
    }
  })
})

