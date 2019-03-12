<template>
  <el-container>
    <el-main class="content">
      <el-row class="banner">
        <img src="/static/img/service_banner.png" alt="">
      </el-row>
      <el-row class="banner">
        <h3>查询服务</h3>
        <h5>提供机构查询、机构查询、机构查询、机构查询</h5>
        <el-row class="query-service">
          <el-col :span="6">
            <p><i class="el-icon-info"></i></p>
            <p class="query-name">检验机构查询</p>
            <p class="query-info">检验机构查询检验机构查询</p>
          </el-col>
          <el-col :span="6">
            <p><i class="el-icon-info"></i></p>
            <p class="query-name">厂家查询</p>
            <p class="query-info">厂家查询厂家查询</p>
          </el-col>
          <el-col :span="6">
            <p><i class="el-icon-info"></i></p>
            <p class="query-name">商品查询</p>
            <p class="query-info">商品查询商品查询</p>
          </el-col>
          <el-col :span="6">
            <p><i class="el-icon-info"></i></p>
            <p class="query-name">机构查询</p>
            <p class="query-info">机构查询机构查询机构查询</p>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="service-industry">
        <h3>多行业覆盖 满足您的个性化需求</h3>
        <h5>让电商与厂家多层面深度融合，创造新的发展生态。</h5>
        <el-row class="industry-info">
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
          <el-col :span="4">
            <p><i class="el-icon-info"></i></p>
            <p class="industry-name">玩具</p>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="company">
        <h3>他们都在用</h3>
        <h5>知名企业都在用商品查询服务</h5>
        <el-row class="company-list">
          <el-col :span="6">
            <img src="/static/img/company1.png" alt="" style="border: 1px solid #cccccc">
          </el-col>
          <el-col :span="6">
            <img src="/static/img/company1.png" alt="" style="border: 1px solid #cccccc">
          </el-col>
          <el-col :span="6">
            <img src="/static/img/company1.png" alt="" style="border: 1px solid #cccccc">
          </el-col>
          <el-col :span="6">
            <img src="/static/img/company1.png" alt="" style="border: 1px solid #cccccc">
          </el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import Headerwrap from './Header.vue'
  import Footerwrap from './Footer.vue'
  export default {
    methods: {}
  }
</script>
<style lang="less">
  .banner{
    margin-top: 10px;
    margin-bottom: 40px;
    img{
      width: 1200px;
    }
  }
  h3{
    color: #383d50;
    padding-left: 30px;
  }
  h5{
    color: #8e93a9;
    padding-left: 30px;
  }
  .query-service{
    text-align: center;
    i{
      font-size: 80px;
      margin-bottom: 15px;
      padding-top: 30px;
    }
    .query-name{
      color: #383d50;
      margin: 10px;
    }
    .query-info{
      color: #383d50;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
  .service-industry{
    background-color: #283f94;
    color: #ffffff;
    padding: 20px 0 40px 0;
    h3{
      color: #ffffff;
    }
    h5{
      color: #ffffff;
      font-weight: normal;
    }
    .industry-info{
      text-align: center;
      padding: 0 40px;
      i{
        font-size: 60px;
        padding-bottom: 15px;
        padding-top: 30px;
      }
    }
  }
  .company{
    padding: 30px 0;
    .company-list{
      text-align: center;
      padding: 30px;
      img{
        display: block;
        width: 80%;
        background-color: red;
        height: 100px;
      }
    }
  }


</style>
