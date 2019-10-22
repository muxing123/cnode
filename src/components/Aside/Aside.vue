<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div class="space">CNode：Node.js专业中文社区</div>
      <div>您可以 <span @click="goTo('/signin')">登录</span> 或 <span @click="goTo('/signin')">注册</span>,也可以</div>
      <div class="git">通过 GitHub 登录</div>
    </div>
<!--侧边栏图片部分-->
    <div class="sidebar-mid">
      <img src="../../icons/img4.png" alt="">
      <img src="../../icons/img5.png" alt="">
      <img src="../../icons/img6.png" alt="">
    </div>
<!--侧边栏话题部分-->
    <div class="sider-topic">
      <div class="header">无人回复的话题</div>
      <div class="content">
        <div>请问node-xlsx解析excel空行数据为空数组怎么回事呀？</div>
        <div>如何学习js</div>
        <div>发现一个用node.js做的后台权限管理框架</div>
        <div>请问有谁了解 VuePress JAMStack Headless cms 么</div>
        <div>RabbitMQ 消费端服务限流实践</div>
      </div>
    </div>
<!--侧边栏社区部分-->
    <div class="community">
      <div class="header">友情社区</div>
      <div class="content">
        <img src="../../icons/ruby-china.png" alt="">
        <img src="../../icons/golangtc-logo.png" alt="">
        <img src="../../icons/phphub-logo.png" alt="">
        <img src="../../icons/img7.png" alt="" class="last">
      </div>
    </div>
<!--侧边栏二维码-->
    <div class="code">
      <div class="header">客户端二维码</div>
      <div class="content">
        <img src="../../icons/img8.png" alt=""><br>
        <span>客户端源码地址</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {
    //跳转登录页面
    goTo(path) {
      this.$router.push(path);
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.sidebar {
  width: 290px;
  font-size: 14px;
  margin-bottom: 20px;
  .sidebar-top {
    font-size: 13px;
    margin-bottom: 13px;
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    .space {
      margin-bottom: 20px;
    }
    span {
      color: #778087;
      &:hover {
        text-decoration: underline;
      }
    }
    /*按钮效果*/
    .git {
      width:150.98px;
      padding: 3px 10px;
      margin-top: 8px;
      border: none;
      font-size: 14px;
      cursor: pointer;
      letter-spacing: 2px;
      box-shadow: none;
      border-radius: 3px;
      line-height: 2em;
      vertical-align: middle;
      color: #fff;
      background-color: #5bc0de;
    }
  }
/*  侧边栏图片部分养式*/
  .sidebar-mid {
    margin-bottom: 13px;
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    line-height: 2em;
    img {
      width: 270px;
    }
  }
/*  侧边栏话题部分养式*/
  .sider-topic {
    margin-bottom: 13px;
    font-size: 13px;
    background: white;
    .header {
      color: #51585c;
      border-radius: 3px 3px 0 0;
      padding: 10px;
      background-color: #f6f6f6;
    }
    .content {
      padding: 10px;
      border-radius: 0 0 3px 3px;
      div {
        overflow: hidden;
        max-width: 270px;
        font-size: 14px;
        color: #778087;
        height: 30px;
        line-height: 30px;
      }
    }
  }
/*  侧边栏社区部分养式*/
  .community {
    font-size: 13px;
    margin-bottom: 13px;
    background: white;
    .header {
      color: #51585c;
      border-radius: 3px 3px 0 0;
      padding: 10px;
      background-color: #f6f6f6;
    }
    .content {
      padding: 10px;
      border-radius: 0 0 3px 3px;
      img {
        width: 150px;
        margin-bottom: 10px;
      }
      .last {
        margin-bottom: 0;
      }
    }
  }
/*侧边栏二维码样式*/
  .code {
    font-size: 13px;
    margin-bottom: 13px;
    background: white;
    .header {
      color: #51585c;
      border-radius: 3px 3px 0 0;
      padding: 10px;
      background-color: #f6f6f6;
    }
    .content {
      padding: 10px;
      border-radius: 0 0 3px 3px;
      text-align: center;
      img {
        width: 200px;
      }
      span {
        color: #778087;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
