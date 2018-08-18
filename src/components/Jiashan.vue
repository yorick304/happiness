<template>
  <div class="j-wrap" :style="{backgroundImage:'url('+require('../assets/bg2.png')+')'}">
    <div class="h-wrap">
      <img src="//si.geilicdn.com/resource-32ce0000016542c6c9410a02685e_690_420.jpg" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="area-wrap">
      <div class="area-title">
        嘉善产业新城
      </div>
      <div class="area-title-tip">
        区位优势
      </div>
      <img class="area-map" :src="areaMapUrl" width="92%" alt="" @click="areaMap"/>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          嘉善隶属浙江嘉兴市，位于江浙沪交界处，是浙江接轨上海第一站，全国百强县之一。县域面积506.6平方公里，人口57.06万人，2017年地区生产总值521亿元。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          嘉善产业新城位于嘉善南部，面积12平方公里，距嘉善南站仅5分钟车程，在上海半小时经济圈内。
        </p>
      </div>
      <div class="area-title-tip">
        交通优势
      </div>
      <div class="transportation">
        <span class="transportation-str"><em>公路：</em>沪杭、申嘉湖、苏通3条高速公路及国道320、318穿境而过，15分钟之内上高速，通达全国</span>
        <span class="transportation-str"><em>机场：</em>距上海虹桥机场、杭州萧山机场约1小时车程，距上海浦东机场1.5小时车程，距宁波栎社国际机场2小时车程</span>
        <span class="transportation-str"><em>高铁：</em>沪杭高铁设嘉善南站，20分钟直达上海、30分钟直达杭州</span>
        <span class="transportation-str"><em>港口：</em>距乍浦（嘉兴）港40分钟车程，距洋山港、上海港、宁波港约1.5小时车程</span>
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
          嘉善是沪苏杭产业走廊关键节点和G60科创走廊枢纽城市，资本、技术、人才等生产要素独具优势。上海的产业外溢首先惠及嘉善；周边的清华大学长三角研究院、中科院应用技术研究院、浙大、复旦、交大等高校科研院所提供了丰富的人才与技术资源。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          嘉善周边形成了较完善的智能网联车配套体系。百公里范围内有十多个大型车企，如上汽、吉利、华域、万向等。汽车电子、零部件、软件、互联网、机器人企业不可胜数。驭势、合众、蔚来、博世、钛马、思岚等智能网联或新能源汽车企业均在此布局，智能网联车测试场正在建设中。
        </p>
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          嘉善在周边大城市带动下，金融商贸业发展极快。1小时经济圈内的上海、杭州、苏州、宁波4大城市均向嘉善溢出生产性服务业。融入上海进程进一步促进了嘉善科技创新、金融商贸等高端服务业及总部经济的快速发展。中晨电商、云鸟配送、天天果园等一大批企业已经进驻。
        </p>
      </div>
      <div class="area-title-tip">
        产业集群
      </div>
      <div class="area-str-wrap">
        <img src="../assets/common/right.png" alt="">
        <p class="area-str">
          华夏幸福坚持“产业优先”的核心策略，在嘉善产业新城重点发展科技创新、智能网联车、金融商贸三大产业集群。
        </p>
      </div>
      <div class="industry-wrap">
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-23a8000001654332ceef0a026860-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">科技创新</span>
            <span class="industry-str">以发展科技研发平台为抓手，引入国家重点实验室和企业技术中心，导入高技术含量、高附加值的人工智能、智能制造技术及互联网技术成果，营造技术产业化生态环境，打造集科技研发、成果转化、科技服务为一体的产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-245500000165433322a50a026860-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">智能网联车</span>
            <span class="industry-str">依托公共测试平台，聚集技术、人才、资本等产业资源，重点引入智能网联车各系统模块生产企业和整车集成企业，完善产业链配套体系，在全国率先形成面向未来的智能网联车产业集群。</span>
          </div>
        </div>
        <div class="industry-item">
          <img class="industry-left" src="//si.geilicdn.com/resource-122000000165433363c50a02853e-unadjust_116_116.png" height="57px" width="57px"/>
          <div class="industry-right">
            <span class="industry-title">金融商贸</span>
            <span class="industry-str">
              承接沪苏杭商务资源，服务长三角大市场，重点发展以金融服务、电子商务、商贸服务等总部经济为特色的金融商贸产业集群。
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
        areaMapUrl: '//si.geilicdn.com/resource-51aa00000165466850c10a02853e_1600_1600.jpg'
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
      },
      areaMap() {
        this.$ImagePreview({
          imgList: [
            {
              url: this.areaMapUrl
            }
          ],
          showIndicator: false
        })
      }
    }
  }
</script>