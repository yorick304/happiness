<template>
  <div class="r-wrap">
    <div class="r-header">
      <img src="//si.geilicdn.com/resource-5a180000016542d865e10a026860_750_352.jpg" alt="" width="100%">
      <span class="go-back" @click="goBack"></span>
    </div>
    <div class="r-d-content">
      <div class="d-content-title">
        杭州区域产业新城
      </div>
      <p class="content-str content-str-first">
        杭州市是浙江省省会和长三角中心城市，面积16596平方公里，人口946.8万人，2017年地区生产总值12556亿元。杭州创新发展水平居全国城市前列，被评为“十大创新城市”和“十大智慧城市”。
      </p>
      <p class="content-str">
        杭州都市圈是全国最有竞争力的城市群，先进制造业和现代服务业发达。华夏幸福重点在嘉善、南浔、德清、南湖等地打造产业新城。
      </p>
      <div class="r-d-content-cluster">
        <img class="cluster-map" src="//si.geilicdn.com/resource-174200000165467f30f40a02685e-unadjust_642_506.png" width="95%" alt="">
        <ul class="items">
          <li class="item-wrap" @click="toDetail(0)">
            <div class="item">
              <img class="item-logo" src="//si.geilicdn.com/resource-5a8e0000016542d8a3100a026860_312_180.jpg" alt="">
              <div class="item-content">
                <span class="item-title">嘉善产业新城</span>
                <span class="item-detail" style="margin-top: 10px">
                  科技创新
                </span>
                <span class="item-detail">
                  智能网联车
                </span>
                <span class="item-detail">
                  金融商贸
                </span>
                <span class="detail-tip">详情</span>
              </div>
            </div>
          </li>
          <li class="item-wrap" @click="toDetail(1)">
            <div class="item">
              <img class="item-logo" src="//si.geilicdn.com/resource-5bd30000016542d933ad0a026860_312_180.jpg" alt="">
              <div class="item-content">
                <span class="item-title">南浔产业新城</span>
                <span class="item-detail" style="margin-top: 10px">
                  机器人
                  <span></span>
                  生物医药
                </span>
                <span class="item-detail">
                  新能源汽车及零部件
                </span>
                <span class="item-detail">
                  专用装备
                </span>
                <span class="detail-tip">详情</span>
              </div>
            </div>
          </li>
          <li class="item-wrap" @click="toDetail(2)">
            <div class="item">
              <img class="item-logo" src="//si.geilicdn.com/resource-49c10000016542d979d50a028841_312_180.jpg" alt="">
              <div class="item-content">
                <span class="item-title">德清产业新城</span>
                <span class="item-detail" style="margin-top: 10px">
                  工业智能控制
                </span>
                <span class="item-detail">
                  通用航空
                </span>
                <span class="item-detail">
                  汽车关键零部件
                </span>
                <span class="detail-tip">详情</span>
              </div>
            </div>
          </li>
          <li class="item-wrap" @click="toDetail(3)">
            <div class="item">
              <img class="item-logo" src="//si.geilicdn.com/resource-4a6f0000016542d9c1f60a028841_312_180.jpg" alt="">
              <div class="item-content">
                <span class="item-title">南湖产业新城</span>
                <span class="item-detail" style="margin-top: 10px">
                  专用装备
                </span>
                <span class="item-detail">
                  智能终端
                </span>
                <span class="item-detail">
                  医疗器械
                </span>
                <span class="detail-tip">详情</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .r-wrap {
    .r-header {
      position: relative;
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
    .r-d-content {
      background-color: #bf0008;
      height: 100%;
      color: #ffffff;
      font-size: 12px;/*no*/
      padding: 0px 30px;
      position: relative;
      padding-bottom: 80px;
      .r-d-content-cluster {
        background-color: #ffffff;
        overflow: hidden;
        margin-top: 50px;
        border-radius: 2px;/*no*/
        .items {
          padding-left: 18px;
          overflow: hidden;
          width: 100%;
          .item-wrap {
            float: left;
            overflow: hidden;
            width: 46%;
            &:nth-child(even) {
              margin-left: 10px;
            }
            &:nth-child(odd) {
              margin-right: 10px;
            }
            .item {
              display: flex;
              flex-direction: column;
              padding-bottom: 30px;
              position: relative;
              
              .item-logo {
                height: 180px;
              }
              .item-content {
                margin-left: 24px;
                margin-top: 30px;
                position: relative;
                .item-title {
                  font-size: 15px;/*no*/
                  color: #333333;
                }
                .item-detail {
                  font-size: 12px;/*no*/
                  color: #666666;
                  margin-top: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  span {
                    display: inline-block;
                    width: 1px;/*no*/
                    height: 12px;/*no*/
                    background-color: #999999;
                    vertical-align: middle;
                    margin-top: -4px;
                  }
                }
                .detail-tip {
                  font-size: 12px;/*no*/
                  color: #bf0008;
                  position: absolute;
                  top: 4px;
                  right: 28px;
                  &:after {
                    content: "";
                    width: 6px;/*no*/
                    height: 6px;/*no*/
                    border-right: 1px solid #bf0008;/*no*/
                    border-bottom: 1px solid #bf0008;/*no*/
                    right: -18px;
                    top: 8px;
                    position: absolute;
                    transform: rotate(-45deg);
                  }
                }
              }
            }
          }
        }
        .cluster-title {
          font-size: 14px;/*no*/
          color: #28292d;
          margin-left: 20px;
          margin-top: 40px;
          font-weight: bold;
          &:before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 30px;
            background-color: #bf0008;
            vertical-align: middle;
            margin-right: 10px;
            margin-top: -3px
          }
        }
        .cluster-map {
          margin: 40px auto 30px;
          display: block;
        }
      }
      .d-content-title {
        background-color: #ffffff;
        font-size: 25px;/*no*/
        position: absolute;
        color: #333333;
        height: 152px;
        line-height: 152px;
        left: 30px;
        transform: translateY(-50%);
        border-radius: 2px;/*no*/
        padding-right: 30px;
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
      .content-str {
        text-align: justify;
        font-size: 12px;/*no*/
        line-height: 40px;
        padding-top: 30px;
        &.content-str-first {
          padding-top: 130px;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: 'Regional',
    created() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
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
    },
    methods: {
      goBack() {
        this.$router.push({
          path: '/'
        })
      },
      toDetail(itemId) {
        switch(itemId) {
          case 0:
            this.$router.push({
              path: `/Regional/Jiashan`,
              query: {
                itemId: itemId
              }
            })
          break;
          case 1:
            this.$router.push({
              path: `/Regional/Nanxun/`,
              query: {
                itemId: itemId
              }
            })
          break;
          case 2:
            this.$router.push({
              path: `/Regional/Deqing`,
              query: {
                itemId: itemId
              }
            })
          break;
          case 3:
            this.$router.push({
              path: `/Regional/Nanhu`,
              query: {
                itemId: itemId
              }
            })
          break;
        }
      }
    }
  }
</script>