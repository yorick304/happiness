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
function urlQuery(key) {
  let m = location.search.match(new RegExp(`(\\?|&)(${key})=([^&$]*)`))
  return m ? m[3] : ''
}
let cityId = urlQuery('cityId') || '9'
let indexParam = {
  url: `//wechat.viicb.com?service=App.City.Get&id=${cityId}`
}
function JSONHandle(json) {
  if (!json) return ''
  Object.keys(json).map(key => {
    if (json[key] && (json[key][0] === '{' || json[key][0] === '[')) {
      try {
        json[key] = JSON.parse(json[key])
      } catch (e) {
        console.log(e)
      }
    } else if (json[key] instanceof Object) {
      JSONHandle(json[key])
    }
  })
  return json
}
Store.indexData(indexParam).then((data) => {
  window.IndexData = data
  window.IndexData = JSONHandle(window.IndexData)
  console.log(window.IndexData)
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

