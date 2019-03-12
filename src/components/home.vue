<template>
  <el-row>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <img :src="item.url" style="width: 100%;height: 300px"/>
      </el-carousel-item>
    </el-carousel>
    <el-row class="advantage">
      <el-row class="advantage-img">
        <el-col :span="8">
          <img src="/static/img/home_1.png" alt="">
        </el-col>
        <el-col :span="8">
          <img src="/static/img/home_2.png" alt="">
        </el-col>
        <el-col :span="8">
          <img src="/static/img/home_3.png" alt="">
        </el-col>
      </el-row>
    </el-row>
    <el-row class="news-header">
      <h3>新闻动态</h3>
      <el-row :gutter="20" style="margin: 10px 30px 40px">
        <el-col :span="6" >
          <div class="news">
            <img src="" alt="" style="width: 100%;height: 150px;display: block;background: red">
            <p class="new-title">滨江区政府前来视察电商供应链认证及检测服务平台</p>
            <p>2019-03-04</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="news">
            <img src="" alt="" style="width: 100%;height: 150px;display: block;background: red">
            <p class="new-title">滨江区政府前来视察电商供应链认证及检测服务平台</p>
            <p>2019-03-04</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="news">
            <img src="" alt="" style="width: 100%;height: 150px;display: block;background: red">
            <p class="new-title">滨江区政府前来视察电商供应链认证及检测服务平台</p>
            <p>2019-03-04</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="news notice">
            <p class="notice-title">通知公告 <span class="more">更多</span></p>
            <ul>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
              <li><span>2019年春节放假通知</span><span class="news-time">2019-01-01</span></li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="(item, index) in images1" :key="index">
        <img :src="item.url" style="width: 600px;height: 350px"/>
      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        images:[
          {
            url: ("/static/img/service_banner.png")
          },
          {
            url: ("/static/img/case_banner.png")
          },
          {
            url: ("/static/img/bottom_lunbo3.jpg")
          }
        ],
        images1:[
          {
            url: ("/static/img/bottom_lunbo1.jpg")
          },
          {
            url: ("/static/img/bottom_lunbo2.jpg")
          },
          {
            url: ("/static/img/bottom_lunbo3.jpg")
          }
        ]
      }
    }
  }
</script>
<style lang="less">

  .news-header{
    color: #283f94;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
    h3{
      font-weight: 500;
    }
    .news{
      border: 1px solid #dcdcdc;
      height: 228px;
      p{
        padding: 5px 0;
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
        text-align: left;
        margin-left: 20px;
        margin-right: 20px;
        border-bottom: 1px solid #cccccc;
        font-size: 15px;
        line-height: 25px;
        .more{
          float: right;
          font-size: 12px;
          color: #333333;
        }
      }
      ul{
        list-style-type: none;
        padding:0 20px;
        font-size: 13px;
        text-align: left;
        li{
          padding: 5px 0;
          .news-time{
            float: right;
          }
        }
      }

    }

  }

  .advantage{
    height: 743px;
    background: url("/static/img/home_bg.png");
    .advantage-img{
      text-align: center;
      margin-top: -20px;
      z-index: 111;
    }
  }
</style>
