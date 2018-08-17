<template>
  <div class="j-wrap" :style="{backgroundImage:'url('+require('../assets/bg2.png')+')'}">
    <div class="h-wrap">
      <img src="//si.geilicdn.com/resource-432f0000016542ce61fe0a02685e_690_420.jpg" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="area-wrap">
      <div class="area-title">
        南浔产业新城
      </div>
      <div class="area-title-tip">
        区位优势
      </div>
      <img class="area-map" src="//si.geilicdn.com/resource-44a90000016542ceb6bf0a026860-unadjust_690_690.png" width="92%" alt="">
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔区隶属浙江湖州市，是湖州接轨上海浦东的东大门。南浔地处沪湖产业发展轴与杭州大湾区的交汇点、上海都市圈和杭州都市圈的重叠区，沪苏杭三大城市均在“半小时经济圈”内。区域面积702平方公里，人口54.64万人，2017年地区生产总值380亿元。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔产业新城位于难浔区东部、乌镇西北，总面积49平方公里。
        </p>
      </div>
      <div class="area-title-tip">
        交通优势
      </div>
      <div class="transportation">
        <span class="transportation-str"><em>公路：</em>沪渝、申嘉湖、练杭3条高速及318国道贯穿全境</span>
        <span class="transportation-str"><em>机场：</em>距杭州萧山国际机场、上海虹桥国际机场1.5小时车程</span>
        <span class="transportation-str"><em>高铁：</em>沪苏湖高铁（在建）设南浔站，30分钟抵达上海虹桥</span>
        <span class="transportation-str"><em>水路：</em>京杭运河、长湖申航道2条千吨级航道穿境而过</span>
      </div>
      <div class="area-title-tip">
        产业环境
      </div>
      <swiper :options="swiperOption" style="margin: 0 auto; margin-left: 15px;margin-right: 15px;">
        <div class="swiper-slide" v-for="banner in banners">
          <img v-lazy="banner" width="100%">
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔是长三角、环杭州湾和环太湖三大经济圈的交汇带，也是沪苏杭智能制造产业走廊的核心区。周边大城市正在加速产业升级，大量制造业向南浔溢出。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔及其周边正在形成新能源汽车产业基地。100公里范围内有十多家大型车企，如上汽、吉利、华域、万向等；动力电池、汽车电子、核心零部件等配套企业不可胜数。相邻的厂兴、海宁是著名的动力电池产业集聚区，合众、吉利、长江、吉奥等一批新能源汽车企业均在周边布局。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔专用装备产业配套完善、基础雄厚。电梯、电机、电磁线等是在全国有竞争力的优势产业，与长三角专用装备产业长期协作，形成了较完善的配套体系，吸引沪苏杭高端装备业来此聚集。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          南浔生物医药产业潜力巨大。南太湖一带生物医药产业一向发达，生物医药技术企业云集、人才众多，沪苏杭等城市的生物医药产业外溢效应明显，具有区位优势、政策优势的南浔产业新城迎来产业发展历史机遇。
        </p>
      </div>
      <div class="area-title-tip">
        产业集群
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          华夏幸福坚持“产业优先”的核心策略，在南浔产业新城重点发展机器人、新能源汽车及零部件、专用装备、生物医药四大产业集群。
        </p>
      </div>
      <div class="industry-wrap">
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-16150000016543354c640a02853e-unadjust_114_114.png" width="57px" height="57px"/>
          <div class="industry-right">
            <span class="industry-title">机器人</span>
            <span class="industry-str">以机器人本体制造、系统集成为切入点，发展面向华东地区产业升级的高端工业机器人、核心零部件及应用服务，完善产业生态，打造百亿级机器人产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-169600000165433589780a028841-unadjust_116_116.png" width="57px" height="57px"/>
          <div class="industry-right">
            <span class="industry-title">新能源汽车及零部件</span>
            <span class="industry-str">引入新能源整车及电机、电控、电池等核心零部件企业，与周边形成完善配套体系，打造新能源汽车大规模产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-2a33000001654335f32c0a026860-unadjust_116_116.png" width="57px" height="57px"/>
          <div class="industry-right">
            <span class="industry-title">专用装备</span>
            <span class="industry-str">
              重点发展食品饮料、物流仓储、纺织服装、医药化工等轻工行业专用的成套智能工业装备，形成新一代智能专用装备产业集群。
            </span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="../assets/medicine.png" width="57px" height="57px"/>
          <div class="industry-right">
            <span class="industry-title">生物医药</span>
            <span class="industry-str">
              吸收生物医药领域最新科技成果，重点发展生物制药、创新化药、疫苗、诊断试剂、医疗器械与设备等特色产业，形成高端产业聚集的标杆和引领生物医药产业发展的风向标。
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
    name: 'Jiashan',
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
        banners: ['//si.geilicdn.com/resource-2e6c0000016542cd1ccb0a02853e_690_400.jpg', '//si.geilicdn.com/resource-2f610000016542cd8cee0a02853e_690_400.jpg', '//si.geilicdn.com/resource-429f0000016542cdca8d0a026860_690_400.jpg', '//si.geilicdn.com/resource-42680000016542ce06b90a02685e_690_400.jpg'],
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
    created() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
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