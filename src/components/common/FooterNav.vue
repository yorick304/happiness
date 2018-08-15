<template>
  <div class="nav-wrap">
    <span v-for="(item,index) in navs" :key="index" class="item-wrap" @click="nav(index)">
        {{item}}
        <span class="under-line" v-if="index == itemId"></span>
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
    .item-wrap {
      flex: 1;
      text-align: center;
      font-size: 15px;/*no*/
      color: #333333;
      position: relative;
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
    data() {
      return {
        navs: ['嘉善', '南浔', '德清', '南湖']
      }
    },
    methods: {
      nav(itemId) {
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