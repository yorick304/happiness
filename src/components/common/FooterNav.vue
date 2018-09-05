<template>
  <div class="nav-wrap">
    <span v-for="(item,index) in navs" :key="index" class="item-wrap" :class="{'current': item.id  == itemId}" @click="nav(item.id)">
        {{item && item.subTitle}}
        <span class="under-line" v-if="item.id  == itemId"></span>
        <span class="line" v-if="index != (navs.length-1)"></span>
    </span>
  </div>
</template>
<style lang="scss" scoped>
  .nav-wrap {
    height: 88px;
    line-height: 88px;
    background-color: #ffffff;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0px 0px 9px #2d2c2e33;
    overflow-x: auto;
    .item-wrap {
      flex: 1;
      text-align: center;
      font-size: 15px;/*no*/
      color: #333333;
      position: relative;
      min-width: 140px;
      .line {
        display: inline-block;
        height: 50px;
        width: 1px;/*no*/
        background-color: #e6e6e6;
        margin-top: 16px;
        float: right;
      }
      .under-line {
        height: 2px;/*no*/
        width: 30px;
        background-color: #bf0008;
        display: inline-block;
        position: absolute;
        top: 77%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
<script>
  export default {
    name: 'FooterNav',
    props: ['itemId'],
    computed: {
      navs() {
        let regionals = window.IndexData && window.IndexData.regionals
        let temps = []
        regionals.forEach((regional)=>{
          temps.push({subTitle: regional.subTitle, id: regional.id})
        })
        return temps
      }
    },
    watch: {
      itemId() {
        this.swipe()
      }
    },
    mounted() {
      this.swipe()
    },
    methods: {
      nav(itemId) {
        this.$router.push({
          path: `/Regional/Detail`,
          query: {
            itemId: itemId
          }
        })
      },
      swipe() {
        let itemWrap = document.querySelectorAll('.item-wrap')
        let allWidth = 0
        let clientWidth = document.documentElement.clientWidth
        let regionals = window.IndexData && window.IndexData.regionals
        let tempIndex = 0
        for (let k=0; k<regionals.length; k++) {
          if (regionals[k].id == this.itemId) {
            tempIndex = k
            break;
          }
        }
        for (let i=0; i<itemWrap.length; i++) {
          allWidth += itemWrap[i].clientWidth
        }
        let temWidth = itemWrap[tempIndex].clientWidth
        let oleft = itemWrap[tempIndex].getBoundingClientRect().left
        if ((oleft*1.0)/clientWidth != 0.5) {
          let scrollTo = document.querySelector('.nav-wrap').scrollLeft+ oleft
          scrollTo += -(clientWidth - temWidth)/2
          document.querySelector('.nav-wrap').scrollTo(`${scrollTo}`, 0)
        }
      }
    }
  }
</script>