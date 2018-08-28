<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {Store} from './store/index.js'
export default {
  name: 'App',
  mounted() {
    if (window.IndexData && window.IndexData.hasIndexPage == 0) {
      this.$router.push({path:'/Regional', query:{showBack: 0}})
      window.history.pushState(null, null, document.URL)
      window.addEventListener('popstate', function () {
          history.pushState(null, null, document.URL)
      })
    }
    let share = window.IndexData.share
    let hrefParam = window.location.href
    Store.fetchSignture({ url: 'http://wechat.viicb.com/?service=App.Weixin.GetJsSign', param: {url: hrefParam}}).then((res) => {
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
            title: share.title,
            link: window.location.href,
            desc: share.desc,
            imgUrl: share.image && share.image[0] && share.image[0].url
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
