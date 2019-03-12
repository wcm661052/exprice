<template>
  <el-row class="content">
    <el-col :span="7"><router-link to="/" @click.native="flushCom"><span class="logoname">电商供应链认证及检测服务平台</span></router-link></el-col>
    <el-col :span="11">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        text-color="#333333"
        active-text-color="#283f94"
        mode="horizontal">
        <el-menu-item index="1" ><router-link to="/serviceProduct">服务于产品</router-link></el-menu-item>
        <el-menu-item index="2">核心技术</el-menu-item>
        <el-menu-item index="3"><router-link to="/cases">客户案例</router-link></el-menu-item>
        <el-menu-item index="4">新闻动态</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
  export default {
    methods:{
      flushCom:function(){
      this.$router.go(0);
      }
    }
  }
</script>
<style>
  .logoname{
    line-height: 60px;
    color: #283f94;
    font-size: 18px;
    font-weight: bold;
    padding-left: 20px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom:none;
  }
</style>
