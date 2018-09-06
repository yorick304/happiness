<template>
  <div class="r-wrap">
    <div class="r-header">
      <img :src="IndexData && IndexData.indexMap && IndexData.indexMap[0] && IndexData.indexMap[0].url" alt="" width="100%">
      <span v-if="showBack" class="go-back" @click="goBack"></span>
    </div>
    <div class="r-d-content">
      <div class="d-content-title">
        {{IndexData && IndexData.cityName}}
      </div>
      <p class="content-str" :class="{'content-str-first':index ==0}" v-for="(item, index) in IndexData.paragraphs">
        {{item}}
      </p>
      <div class="r-d-content-cluster">
        <div style="position:relative;overflow: hidden;width: 100%;" id="imgBox">
          <img class="cluster-map" :src="IndexData && IndexData.cityMap && IndexData.cityMap[0] && IndexData.cityMap[0].url" width="95%" alt="" @click="areaMap">
        </div>
        <ul class="items">
          <li class="item-wrap" @click="toDetail(item.id)" v-for="(item, index) in regionals">
            <div class="item">
              <img class="item-logo" :src="item.imageSmall && item.imageSmall[0] && item.imageSmall[0].url" alt="">
              <div class="item-content">
                <span class="item-title">{{item.title}}</span>
                <span class="item-detail" :class="{'first-item': idx == 0}" v-for="(content, idx) in item.intro">
                  <template v-for="(str, ide) in content">
                    <span v-if="ide%2 != 0"></span>
                    {{str}}
                  </template>
                  
                  <!-- 机器人
                  <span></span>
                  生物医药 -->
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
          margin-top: 6px;
          // margin-bottom: 32px;
          .item-wrap {
            float: left;
            overflow: hidden;
            width: 46%;
            box-sizing: content-box;
            &:nth-child(even) {
              margin-left: 10px;
            }
            &:nth-child(odd) {
              margin-right: 10px;
            }
            .item {
              display: flex;
              flex-direction: column;
              padding-bottom: 66px;
              position: relative;
              
              .item-logo {
                height: 180px;
                border-radius: 2px;/*no*/
              }
              .item-content {
                margin-top: 26px;
                position: relative;
                .item-title {
                  font-size: 15px;/*no*/
                  color: #333333;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                  padding-right: 44px;
                }
                .item-detail {
                  font-size: 12px;/*no*/
                  color: #666666;
                  margin-top: 4px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  &.first-item {
                    margin-top: 8px;
                  }
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
                  right: 20px;
                  &:after {
                    content: "";
                    width: 6px;/*no*/
                    height: 6px;/*no*/
                    border-right: 1px solid #bf0008;/*no*/
                    border-bottom: 1px solid #bf0008;/*no*/
                    right: -14px;
                    top: 10px;
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
          margin: 36px auto 30px;
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
  import previewMixin from '../utils/previewMixin.js'
  export default {
    name: 'Regional',
    mixins: [previewMixin],
    created() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    computed: {
      showBack() {
        return Number(window.IndexData && window.IndexData && window.IndexData.hasIndexPage)
      },
      IndexData() {
        return window.IndexData && window.IndexData
      },
      regionals() {
        return this.IndexData && this.IndexData.regionals
      }
    },
    methods: {
      goBack() {
        this.$router.push({
          path: '/'
        })
      },
      toDetail(itemId) {
        this.$router.push({
          path: `/Regional/Detail`,
          query: {
            itemId: itemId
          }
        })
      }
    }
  }
</script>