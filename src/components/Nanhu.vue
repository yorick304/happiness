<template>
  <div class="j-wrap" :style="{backgroundImage:'url('+require('../assets/bg.png')+')'}">
    <div class="h-wrap">
      <img src="../assets/nanhu/main.jpg" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="area-wrap">
      <div class="area-title">
        南湖产业新城
      </div>
      <div class="area-title-tip">
        区位优势
      </div>
      <img class="area-map" src="../assets/nanhu/nanhuMap.png" width="92%" alt="">
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南湖区是嘉兴市中心城区，是嘉兴政治、经济、文化中心，总面积438.99平方公里，人口63.4万人，2017年地区生产总值512.89亿元。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南湖产业新城位于南湖区嘉兴科技城内，北靠城市主轴线中环南路，离沪杭高速东出口10分钟，距高铁枢纽站10分钟车程，总面积14.83平方公里。
        </p>
      </div>
      <div class="area-title-tip">
        交通优势
      </div>
      <div class="transportation">
        <span class="transportation-str"><em>公路：</em>沪杭高速、杭浦高速、申嘉湖高速、杭州湾跨海大桥等“三横三纵三桥”立体交通网络贯穿</span>
        <span class="transportation-str"><em>机场：</em>距上海虹桥机场1小时车程、距杭州萧山机场1小时15分钟车程、距上海浦东机场1.5小时车程</span>
        <span class="transportation-str"><em>高铁：</em>沪杭高铁18分钟到松江南站，28分钟到上海虹桥站，23分钟抵达杭州站</span>
        <span class="transportation-str"><em>港口：</em>距嘉兴港40分钟车程、距大小洋山港约1小时车程、距上海港1.5小时车程、距宁波港2小时车程</span>
      </div>
      <div class="area-title-tip">
        产业环境
      </div>
      <swiper :options="swiperOption" style="margin: 0 auto; margin-left: 15px;margin-right: 15px;">
        <div class="swiper-slide" v-for="banner in banners">
          <img :src="banner">
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南湖承接上海和杭州两大城市装备制造业的产业溢出。沪杭产业升级过程中，大量装备制造业向外迁移，南湖在沪杭中间，交通便利、物流畅通、人才充足，是承接沪杭装备产业的理想场所。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南湖具有发展新型智能终端的生产条件和市场条件。南湖周边100公里内电子信息、互联网、装备制造业企业众多，一方面具备新型智能终端生产的配套条件，另一方面也有巨大的工业智能终端应用市场。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南湖具有发展医疗器械产业的区位优势。沪苏杭三大城市的医疗器械和设备产业规模很大，近年来有向周边扩散的趋势。南湖位于沪杭产业走廊和G60科创走廊中间，沪苏杭的产业辐射以及创新扩散将首先落在南湖。
        </p>
      </div>
      <div class="area-title-tip">
        产业集群
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          华夏幸福坚持“产业优先”的核心策略，在南湖产业新城重点发展专用装备、智能终端、医疗器械三大产业集群。
        </p>
      </div>
      <div class="industry-wrap">
        <div class="industry-item">
          <img class="industry-left" src="../assets/robot.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">专用装备</span>
            <span class="industry-str">重点引进轻工装备、物流装备、工程机械制造业，逐步发展智能制造装备，形成面向长三角产业升级的智能制造装备业集群，打造沪杭走廊智能制造示范基地。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="../assets/energy.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">智能终端</span>
            <span class="industry-str">主要引进工业物联网、智能传感、车载终端、智能家居、智能穿戴等新型终端龙头企业，带动产业链上下游企业集聚，发展成为专业生产新型智能终端的产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="../assets/equipment.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">医疗器械</span>
            <span class="industry-str">
              重点引进创新型医疗器械、医疗设备、医用智能终端以及制药设备知名企业，建设生命科技公共研发服务平台，打通项目审批绿色通道，创建医疗器械孵化器，建成国内领先的医疗器械产业基地。
            </span>
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
        margin-left: 30px;
        .transportation-str {
          display: block;
          em {
            font-style: normal;
            font-weight: bold;
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
  export default {
    name: 'Nanhu',
    components: {
      swiper,
      swiperSlide,
      FooterNav
    },
    computed: {
      itemId() {
        return this.$route.query.itemId
      }
    },
    data() {
      return {
        banners: [require('../assets/nanhu/1.png'),require('../assets/nanhu/2.png'),require('../assets/nanhu/3.png'),require('../assets/nanhu/4.png')],
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
        }
      }
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