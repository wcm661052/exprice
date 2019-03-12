<template>
  <el-container>
    <el-header><Headerwrap></Headerwrap></el-header>
    <el-main class="content">
      <router-view/>
    </el-main>
    <el-footer><Footerwrap></Footerwrap></el-footer>
  </el-container>
</template>
<script>
  import Headerwrap from './Header.vue'
  import Footerwrap from './Footer.vue'
  export default {
    components: {
      Headerwrap,
      Footerwrap
    },
    methods: {}
  }
</script>
<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .news-header{
    color: #283f94;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
    h3{
      font-weight: 500;
    }
  }

  .news{
    border: 1px solid #dcdcdc;
    height: 228px;
    p{
      padding: 5px;
      font-size: 14px;
    }
    .new-title{
      padding-bottom: 5px;
      height: 40px;
    }
  }

  .notice{
    background-color: #f5f5f5;
    .notice-title{

    }
  }
</style>
