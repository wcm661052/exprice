<template>
  <el-row>
    <el-col :span="6">111111111111</el-col>
    <el-col :span="12">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#ffd04b">
        <el-menu-item index="1">服务于产品</el-menu-item>
        <el-menu-item index="2">核心技术</el-menu-item>
        <el-menu-item index="3">客户案例</el-menu-item>
        <el-menu-item index="4">新闻动态</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6">222222</el-col>
  </el-row>

</template>
