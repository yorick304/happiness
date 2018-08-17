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
    setTimeout(() => {
      Store.fetchSignture({ url: 'http://fly.viicb.com/wechat/api/service/getWeChatSignature', param: {link: window.location.href.split('#')[0] }}).then((res) => {
        console.log(res)
        let data = res.data
        let wxAccountInfo = data && data.wxAccountInfo
        console.log(wxAccountInfo)
        wx.config({
          debug: false,
          appId: wxAccountInfo.appId,
          timestamp: wxAccountInfo.timestamp,
          nonceStr: wxAccountInfo.nonceStr,
          signature: wxAccountInfo.signature,
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ'
          ]
        }); 
        wx.ready(function () {
          var shareData = {
            title: '杭州区域产业新城',
            link: window.location.href,
            imgUrl: 'https://si.geilicdn.com/resource-211c0000016546f8a23e0a02853e-unadjust_100_100.png'
          };
          wx.onMenuShareAppMessage(shareData)
          wx.onMenuShareTimeline(shareData)
          wx.onMenuShareQQ(shareData)
        });
      })
    }, 0)
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
