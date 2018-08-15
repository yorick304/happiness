<template>
  <div class="h-wrap">
    <video class="video" controls="controls">
        <source src="../assets/common/info.mp4" type="video/mp4">
    </video>
    <!-- <img src="../assets/title1.png" alt="" class="h-tip"> -->
    <!-- <div class="h-title">
      <div class="h-title-h">
        <span class="title1">华夏幸福</span>
        <span class="title2">产业新城运营商</span>
      </div>
      <span class="h-title-content h-title-content-1">打造产业新城、建设幸福城市</span>
      <span class="h-title-content">使所开发的区域经济发展、社会和谐、人民幸福</span> 
    </div> -->
    <div class="bottom">
      <img src="../assets/common/index.png" width="100%" alt="">
      <div class="button" @click="toRegional">
        杭州区域经济产业新城
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .h-wrap {
    display: flex;
    flex-direction: column;
    .video {
      width: 100%;
    }
    .h-tip {
      margin-left: 40px;
      margin-top: 40px;
      width: 200px;
      display: block;
    }
    // .h-title {
    //   display: flex;
    //   flex-direction: column;
    //   align-self: flex-end;
    //   margin-top: 60px;
    //   margin-right: 10px;
    //   .h-title-h {
    //     display: flex;
    //     flex-direction: column;
    //     color: #333333;
    //     border-bottom: 3px solid #bf0008;/*no*/
    //     padding-bottom: 12px;
    //     width: 121px;/*no*/
    //     .title1 {
    //       font-size: 30px;/*no*/
    //     }
    //     .title2 {
    //       font-size: 17px;/*no*/
    //     }
    //   }
    //   .h-title-content {
    //     font-size: 8px;/*no*/
    //     color: #333333;
    //     &.h-title-content-1 {
    //       margin-top: 12px;
    //     }
    //   }
    // }
    .bottom {
      overflow: hidden;
      position: relative;
      .button {
        height: 100px;
        line-height: 100px;
        width: 406px;
        background-color: #bf0008;
        border-radius: 4px;/*no*/
        color: #ffffff;
        text-align: center;
        font-size: 18px;/*no*/
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 9;
        padding: 0 40px;
        &:after {
          content: "";
          width: 8px;/*no*/
          height: 8px;/*no*/
          border-right: 2px solid #ffffff;/*no*/
          border-bottom: 2px solid #ffffff;/*no*/
          top: 41%;
          right: 18px;/*no*/
          position: absolute;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    methods: {
      toRegional() {
        this.$router.push({
          path: '/Regional'
        })
      }
    }
  }
</script>