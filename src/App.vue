<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body , p{
    margin: 0;
  }
  a{
    text-decoration:none;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  }
  .content{
    width: 1200px;
    margin: 0 auto;
  }
  .el-header{
    padding: 0;
  }
  .el-footer{
    padding: 0;
  }
  .el-main{
    padding: 0;
  }
</style>
