<template>
  <div class="j-wrap" :style="{backgroundImage:'url('+require('../assets/bg2.png')+')'}">
    <div class="h-wrap">
      <img :src="imageBig" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="area-wrap">
      <div class="area-title">
        {{title}}
      </div>
      <div class="area-title-tip">
        {{areaTitle}}
      </div>
      <div style="position:relative;overflow: hidden;width: 100%;" id="imgBox">
        <img class="area-map" :src="areaMapStr" width="92%" alt="" @click="areaMap"/>
      </div>
      <div class="area-str-wrap" v-for="(item, index) in paragraphs">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          {{item}}
        </p>
      </div>
      <div class="area-title-tip">
        {{traffic && traffic.title}}
      </div>
      <div class="transportation">

        <span class="transportation-str" v-for="(item, index) in (traffic && traffic.paragraphs)"><em>{{item.lable}}：</em>{{item.text}}</span>
      </div>
      <div class="area-title-tip">
        {{industryEnv && industryEnv.title}}
      </div>
      <swiper :options="swiperOption" style="margin: 0 auto; margin-left: 15px;margin-right: 15px;">
        <div class="swiper-slide" v-for="banner in banners">
          <img v-lazy="banner" width="100%">
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      
      <div class="area-str-wrap" v-for="(item, index) in (industryEnv && industryEnv.paragraphs)">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          {{item}}
        </p>
      </div>
      <div class="area-title-tip">
        {{industryColony && industryColony.title}}
      </div>
      <div class="area-str-wrap" v-for="(item,index) in (industryColony && industryColony.paragraphs)">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          {{item}}
        </p>
      </div>
      <div class="industry-wrap">
        <div class="industry-item" v-for="(item, index) in (industryColony && industryColony.sections)">
          <img class="industry-left" :src="item.icon" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">{{item.title}}</span>
            <span class="industry-str">{{item.paragraphs}}</span>
          </div>
        </div>
      </div>
    </div>
    <FooterNav :itemId="itemId"/>
  </div>
</template>
<style lang="scss" scoped>
  .j-wrap {
    .h-wrap {
      display: grid;
      .go-back {
        display: inline-block;
        background-color: #324035;
        opacity: 0.7;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        position: absolute;
        left: 40px;
        top: 40px;
        &:after {
          content: "";
          width: 8px;/*no*/
          height: 8px;/*no*/
          border-right: 2px solid #ffffff;/*no*/
          border-bottom: 2px solid #ffffff;/*no*/
          top: 50%;
          left: 50%;
          position: absolute;
          transform: translate(-30%, -50%) rotate(135deg);
        }
      }
    }
    .area-wrap {
      .area-title {
        font-size: 25px;/*no*/
        color: #333333;
        margin-top: 46px;
        font-weight: bold;
        &:before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 54px;
          background-color: #bf0008;
          margin-left: 30px;
          margin-top: 10px;
          vertical-align: middle;
          margin-top: -8px;
        }
      }
      .area-title-tip {
        font-size: 14px;/*no*/
        color: #28292d;
        margin-top: 70px;
        margin-bottom: 30px;
        font-weight: bold;
        &:before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 25px;
          background-color: #bf0008;
          margin-left: 30px;
          margin-top: 10px;
          vertical-align: middle;
          margin-top: -8px;
        }
      }
      .area-map {
        display: block;
        margin: 0 auto;
      }
      .area-str-wrap {
        margin: 0 30px;
        margin-top: 40px;
        display: flex;
        img {
          height: 9px;/*no*/
          align-items: baseline;
          margin-top: 8px;
        }
        .area-str {
          font-size: 12px;/*no*/
          text-align: justify;
          color: #333333;
          margin-left: 10px;
        }
      }
      .industry-wrap {
        padding: 70px 30px 140px;
        .industry-item {
          display: flex;
          .industry-left {
            flex: 1;
            min-width: 57px;/*no*/
            min-height: 57px;/*no*/
          }
          &:not(:first-child){
            margin-top: 90px;
          }
          .industry-right {
            display: flex;
            flex-direction: column;
            margin-left: 32px;
            .industry-title {
              font-size: 16px;/*no*/
              color: #333333;
            }
            .industry-str {
              font-size: 12px;/*no*/
              margin-top: 20px;
              color: #666666;
              text-align: justify;
            }
          }
        }
      }
      .transportation {
        font-size: 12px;/*no*/
        text-align: justify;
        margin: 0 30px;
        .transportation-str {
          color: #333333;
          display: flex;
          em {
            font-style: normal;
            font-weight: bold;
            flex: none;
          }
        }
        
      }
    }
  }
</style>
<script>
  require('swiper/dist/css/swiper.css')
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import FooterNav from './common/FooterNav.vue'
  import previewMixin from '../utils/previewMixin.js'
  function debouce(func, delay, immediate){
    var timer = null
    return function() {
        var context = this
        var args = arguments
        if(timer) clearTimeout(time)
        if(immediate){
            //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
            var doNow = !timer;
            //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
            timer = setTimeout(function(){
              timer = null;
            },delay)
            //立即执行
            if(doNow){
              func.apply(context,args)
            }
        } else {
          timer = setTimeout(function(){
            func.apply(context,args);
          },delay)
        }
    }
  }
  export default {
    name: 'Detail',
    mixins: [previewMixin],
    components: {
      swiper,
      swiperSlide,
      FooterNav
    },
    computed: {
      detail() {
        let itemId = this.itemId
        let regionals = window.IndexData && window.IndexData.regionals
        return regionals && regionals.filter((ele) => {
          return ele.id == itemId
        })[0].detail
      },
      regional() {
        let itemId = this.$route.query.itemId
        let regionals = window.IndexData && window.IndexData.regionals
        return regionals && regionals.filter((ele) => {
          return ele.id == itemId
        })[0]
      },
      itemId() {
        return this.$route.query.itemId
      },
      title() {
        return this.regional && this.regional.title
      },
      areaTitle() {
        return this.detail && this.detail.area && this.detail.area.title
      },
      areaMapStr() {
        return this.detail && this.detail.area && this.detail.area.image && this.detail.area.image[0] && this.detail.area.image[0].url
      },
      paragraphs() {
        return this.detail && this.detail.area && this.detail.area.paragraphs
      },
      traffic() {
        return this.detail && this.detail.traffic
      },
      industryEnv() {
        return this.detail && this.detail.industryEnv
      },
      imageBig() {
        return this.detail && this.detail.imageBig && this.detail.imageBig[0] && this.detail.imageBig[0].url
      },
      banners() {
        return this.industryEnv.map((item) => {
          return item.url
        })
      },
      industryColony() {
        return this.detail && this.detail.industryColony
      },
      getFooterNav() {
        let regionals = window.IndexData && window.IndexData.regionals
        let temps = regionals.map((item) => {
          if (item.id == this.$route.query.itemId) {
            return {id: item.id, cur: true}
          } else {
            return {id: item.id, cur: false}
          }
        })
        return temps
      }
    },
    data() {
      return {
        banners: ['//si.geilicdn.com/resource-1cf00000016542c4e2b90a028841_690_400.jpg', '//si.geilicdn.com/resource-1da40000016542c541ce0a02853e_690_400.jpg', '//si.geilicdn.com/resource-1e340000016542c589720a02853e_690_400.jpg', '//si.geilicdn.com/resource-30c60000016542c5ca030a02685e_690_400.jpg'],
        swiperOption: {
          spaceBetween: 30,
            autoplay: {
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        areaMapUrl: '//si.geilicdn.com/resource-761b000001654c55c0fd0a02853e_690_690.jpg'
      }
    },
    created() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    mounted() {
      let startX, startY
      let moveEndX, moveEndY
      let X, Y
      let seft = this
      let areaWrap = document.querySelector('.area-wrap')
      areaWrap.addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].pageX
        startY = e.changedTouches[0].pageY
      })
      areaWrap.addEventListener('touchend', function(e) {
        moveEndX = e.changedTouches[0].pageX
        moveEndY = e.changedTouches[0].pageY
        X = moveEndX - startX
        Y = moveEndY - startY
        let footerNav = seft.getFooterNav
        let length = footerNav.length
        let tempIndex = 0
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
          if (footerNav && footerNav[0].cur) {
            return
          } else {
            for (let i=0; i<footerNav.length; i++) {
              if (footerNav[i].cur) {
                tempIndex = i
                break;
              }
            }
            window.location.href =`#/Regional/Detail?itemId=${footerNav[tempIndex-1].id}`
          }
　　　　} else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
          if (footerNav && footerNav[length-1].cur) {
            return
          } else {
            for (let i=0; i<footerNav.length; i++) {
              if (footerNav[i].cur) {
                tempIndex = i
                break;
              }
            }
            window.location.href =`#/Regional/Detail?itemId=${footerNav[tempIndex+1].id}`
          }
　　　　}
      })
      // areaWrap.addEventListener('touchmove', debouce(function(e) {
          
      //   },800,true))
    },
    methods: {
      goBack() {
        this.$router.push({
          path: '/Regional'
        })
      }
    }
  }
</script>