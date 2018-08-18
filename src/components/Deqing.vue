<template>
  <div class="j-wrap" :style="{backgroundImage:'url('+require('../assets/bg2.png')+')'}">
    <div class="h-wrap">
      <img src="//si.geilicdn.com/resource-259a0000016542bfd6ae0a026860_690_420.jpg" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="area-wrap">
      <div class="area-title">
        德清产业新城
      </div>
      <div class="area-title-tip">
        区位优势
      </div>
      <div style="overflow: scroll;height: 345px;">
        <img id="areaMap" class="area-map" src="//si.geilicdn.com/resource-4f10000001654666ee010a028841-unadjust_690_690.png" width="92%" alt="" @click="areaMap">
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
        德清位于江浙沪“黄金三角”，与杭州余杭区仅一河之隔，以“接沪融杭”为城市发展战略。总面积936平方公里，人口44万人，2017年地区生产总值470.2亿元，是全国百强县之一。
      </p>
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          德清产业新城位于德清县雷甸镇，是德清乃至湖州市融杭第一站，区域面积13平方公里。
        </p>
      </div>
      <div class="area-title-tip">
        交通优势
      </div>
      <div class="transportation">
        <span class="transportation-str"><em>公路：</em>杭宁高速、申嘉湖高速穿境而过，经304省道1小时可抵达杭州</span>
        <span class="transportation-str"><em>机场：</em>距杭州萧山国际机场40分钟车程</span>
        <span class="transportation-str"><em>高铁：</em>杭宁高铁设德清站，15分钟可到杭州；规划沪苏湖高铁，30分钟可到上海</span>
        <span class="transportation-str"><em>水路：</em>京杭运河、杭湖锡线航道穿境而过，拥有10万吨码头和5万吨码头各1个</span>
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
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          德清属杭州都市圈，距杭州中心仅30公里，高铁10分钟直达，是杭州产业外溢的首选地。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          德清是杭州智能制造的主要承接地。杭州主要发展信息经济，大量制造业转向德清；浙江省“机器换人”推动智能制造装备市场需求不断扩大，德清有临杭优势和港口优势，熟练技术工人多，机电工业基础好，具备发展智能工控产业的优势。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          德清也是杭州汽车零部件产业的承接地。杭州都市圈是中国重要的汽车产业基地，聚集了吉利、广汽、福特、合众等一批整车厂，以及大量汽车零部件厂商。杭州市产业升级推动汽车零部件产业向外转移，德清是主要承接地。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          德清是浙江省规划的四个通航小镇之一。德清通航机场距杭州30公里，毗邻太湖、莫干山、千岛湖等旅游景区，拥有丰富的空中旅游资源。长三角居民消费水平居全国之首，通航培训、旅游、商务、物流等市场潜力很大。
        </p>
      </div>
      <div class="area-title-tip">
        产业集群
      </div>
      <div class="area-str-wrap">
        <img src="//si.geilicdn.com/resource-295b0000016542c1a1800a026860-unadjust_22_20.png" alt="">
        <p class="area-str">
          华夏幸福坚持“产业优先”的核心策略，在德清产业新城重点发展工业智能控制、通用航空、汽车关键零部件三大产业集群。
        </p>
      </div>
      <div class="industry-wrap">
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-0f4300000165433202370a028841-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">工业智能控制</span>
            <span class="industry-str">面向长三角产业升级，服务智能制造，重点发展工控软硬件、工业云、工业物联网、智能仪器仪表等新兴产业，形成智能工控特色产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-0ebd000001654331bd3a0a028841-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">通用航空</span>
            <span class="industry-str">用足德清通航机场资源，拓展通航应用，重点发展通航服务和通航设备制造，打造服务长三角的通航产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-0cf6000001654330e0c70a02853e-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">汽车关键零部件</span>
            <span class="industry-str">
              对接长三角尤其是杭州整车厂，发展配套汽车零部件，注重发展新一代汽车电机、电控、电池、汽车电子等核心零部件，抢占汽车产业制高点。
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
          flex-direction: row;
          .industry-left {
            display: inline-block;
            flex: 1;
            flex-shrink: 0;
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
              display: block;
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

var cat = window.cat || {};
cat.touchjs = {
  left: 0,
  top: 0,
  scaleVal: 1,    //缩放
  rotateVal: 0,   //旋转
  curStatus: 0,   //记录当前手势的状态, 0:拖动, 1:缩放, 2:旋转
  //初始化
  init: function ($targetObj, callback) {
    touch.on($targetObj, 'touchstart', function (ev) {
      cat.touchjs.curStatus = 0;
      ev.preventDefault();//阻止默认事件
    });
    if (!window.localStorage.cat_touchjs_data)
      callback(0, 0, 1, 0);
    else {
      var jsonObj = JSON.parse(window.localStorage.cat_touchjs_data);
      cat.touchjs.left = parseFloat(jsonObj.left), cat.touchjs.top = parseFloat(jsonObj.top), cat.touchjs.scaleVal = parseFloat(jsonObj.scale), cat.touchjs.rotateVal = parseFloat(jsonObj.rotate);
      callback(cat.touchjs.left, cat.touchjs.top, cat.touchjs.scaleVal, cat.touchjs.rotateVal);
    }
  },
  scale: function ($targetObj, callback) {
    var initialScale = cat.touchjs.scaleVal || 1;
    var currentScale;
    touch.on($targetObj, 'pinch', function (ev) {
      if (cat.touchjs.curStatus == 2) {
        return;
      }
      alert(pinch)
      cat.touchjs.curStatus = 1;
      currentScale = ev.scale - 1;
      currentScale = initialScale + currentScale;
      cat.touchjs.scaleVal = currentScale;
      var transformStyle = 'scale(' + cat.touchjs.scaleVal + ') rotate(' + cat.touchjs.rotateVal + 'deg)';
      $targetObj.style['transform'] = transformStyle;
      $targetObj.style['-webkit-transform'] = transformStyle;
      callback(cat.touchjs.scaleVal);

    });

    touch.on($targetObj, 'pinchend', function (ev) {
      if (cat.touchjs.curStatus == 2) {
        return;
      }
      initialScale = currentScale;
      cat.touchjs.scaleVal = currentScale;
      callback(cat.touchjs.scaleVal);
    });
  }
};
  require('swiper/dist/css/swiper.css')
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import FooterNav from './common/FooterNav.vue'
  export default {
    name: 'Deqing',
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
        banners: ['//si.geilicdn.com/resource-0f690000016542b5423e0a026860_690_400.jpg', '//si.geilicdn.com/resource-11520000016542b622e40a026860_690_400.jpg', '//si.geilicdn.com/resource-7f490000016542b68c440a028841_690_400.jpg', '//si.geilicdn.com/resource-00060000016542b6f57f0a02853e_690_400.jpg'],
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
    mounted() {
      let $targetObj = document.getElementById('areaMap');
      cat.touchjs.init($targetObj, function (left, top, scale, rotate) {
        $targetObj.style['left'] = left
        $targetObj.style['top'] = top
        $targetObj.style['transform'] = 'scale(' + scale + ') rotate(' + rotate + 'deg)'
        $targetObj.style['-webkit-transform'] = 'scale(' + scale + ') rotate(' + rotate + 'deg)'
      });
    },
    methods: {
      goBack() {
        this.$router.push({
          path: '/Regional'
        })
      },
      areaMap() {
        
      }
    }
  }
</script>