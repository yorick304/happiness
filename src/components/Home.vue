<template>
  <div class="h-wrap">
    <!-- <img src="../assets/video.jpg" alt="" style="width: 100%;
    position: absolute;" v-if="show"> -->
    <video class="video" controls="controls" @click="start">
      <source src="../assets/common/info2.mp4" type="video/mp4">
    </video>
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
      height: 310px;/*no*/
    }
    .h-tip {
      margin-left: 40px;
      margin-top: 40px;
      width: 200px;
      display: block;
    }
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
        show: true
      }
    },
    methods: {
      toRegional() {
        this.$router.push({
          path: '/Regional'
        })
      },
      start() {
        this.show = false
      }
    }
  }
</script>