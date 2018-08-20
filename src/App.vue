<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Store} from './store/index.js'
export default {
  name: 'App',
  created() {

    let hrefParam = decodeURIComponent(window.location.href)
    Store.fetchSignture({ url: 'http://wechat.viicb.com/?service=App.Weixin.GetJsSign', param: {url: hrefParam,appId: 'wx39cfe2803524d9df'}}).then((res) => {
      if (res.ret==200) {
        let data = res.data
        wx.config({
          debug: false,
          appId: 'wx39cfe2803524d9df',
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ'
          ]
        })
        wx.ready(function () {
          var shareData = {
            title: '杭州区域产业新城',
            link: window.location.href,
            desc: '华夏幸福重点在嘉善、南浔、德清、南湖等地打造产业新城',
            imgUrl: 'https://si.geilicdn.com/resource-211c0000016546f8a23e0a02853e-unadjust_100_100.png'
          };
          wx.onMenuShareAppMessage(shareData)
          wx.onMenuShareTimeline(shareData)
          wx.onMenuShareQQ(shareData)
        })
      }
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  color: #2c3e50;
  height: 100%;
  background-color: #FFFFFF;
}
</style>
