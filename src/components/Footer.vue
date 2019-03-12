<template>
  <div class="footer-wrap">
    <el-row class="content footer-content">
      <el-col :span="6">
        <p><i class="el-icon-info"></i></p>
        <p>新手上路</p>
      </el-col>
      <el-col :span="6">
        <p><i class="el-icon-question"></i></p>
        <p>我有疑问</p>
      </el-col>
      <el-col :span="6">
        <p><i class="el-icon-edit"></i></p>
        <p>投诉建议</p>
      </el-col>
      <el-col :span="6">
        <p><i class="el-icon-edit"></i></p>
        <p>服务说明</p>
      </el-col>
    </el-row>
    <el-row class="law-state">
      <span>@ALIMAMA MUX powered by wmwl THX.法律声明</span>
    </el-row>
  </div>
</template>
<style lang="less">
  .footer-wrap{
    background: #444a62;
    color: #bfc5e3;
  }
  .footer-content{
    padding: 20px 40px;
    text-align: center;
    i{
      font-size: 36px;
      margin-bottom: 10px;
    }
  }
  .law-state{
    background: #272a37;
    line-height: 40px;
    text-align: center;
    span{
      color:#bac0da;
      font-size: 14px;
    }
  }
</style>
