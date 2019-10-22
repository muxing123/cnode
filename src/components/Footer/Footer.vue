<template>
  <div class="footer-main">
    <div class="bottom-top"><span>RSS</span> | <span>源码地址</span></div>
    <div class="bottom-main">
      <div class="space">
        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
        的技术研究。
      </div>
      <div class="space">
        服务器赞助商为<img src="../../icons/img1.png" class="img1">
        ,存储赞助商为<img src="../../icons/img2.png" class="img2">
        ,由<img src="../../icons/img3.png">提供应用性能服务。
      </div>
      <div class="space">新手搭建 Node.js 服务器，推荐使用无需备案的 <span>DigitalOcean(https://www.digitalocean.com/)</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.footer-main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  color: #e2e2e2;
  padding: 20px 0;
  font-size: 13px;
  line-height: 2em;
  .bottom-top {
    span {
      color: #666;
      &:hover {
        color: #08c;
      }
    }
  }
  .bottom-main {
    color: #ababab;
    .space {
      margin-bottom: 10px;
      line-height: 20px;
      vertical-align: bottom;
      .img1 {
        width: 92px;
      }
      .img2 {
        width: 115px;
      }
      span {
        color: #08c;
        &:hover {
          color: #9e78c0;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
