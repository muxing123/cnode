<template>
  <div class="header">
    <div class="inner">
      <div class="container">
        <div class="container-right">
          <a href="/" class="brand">
            <img src="../../icons/cnodejs_light.svg" alt="标志" />
          </a>
          <div>
            <form action="/" class="search">
              <input type="text" class="search-query" />
            </form>
          </div>
        </div>
        <div class="container-left">
          <div>
            <a href="/">首页</a>
          </div>
          <div>
            <a href="/">新手入门</a>
          </div>
          <div>
            <a href="/">API</a>
          </div>
          <div>
            <a href="/">关于</a>
          </div>
          <div>
            <a href="/">注册</a>
          </div>
          <div>
            <a href="/">登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
.header {
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  height: 50px;
  position: relative;
  background: #444;
  font-size: 13px;
  color: #333;
  line-height: 20px;
  .inner {
    width: 90%;
    height: 40px;
    margin: auto;
    padding: 5px;
    .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-width: 960px;
      margin: 0 auto;
      max-width: 1400px;
      height: 40px;
      .container-right {
        display: flex;
        .brand {
          display: block;
          width: 120px;
          padding: 3px 20px;
          margin-left: -20px;
          height: 34px;
          line-height: 34px;
          font-size: 20px;
          color: #ccc;
          font-weight: 700;
        }
        .search {
          margin-top: 6px;
          position: relative;
          .search-query {
            width: 206px;
            height: 20px;
            background: url("../../icons/search.png") 4px 4px no-repeat #888;
            padding: 3px 5px 3px 22px;
            color: #666;
            border: 0;
            margin-top: 2px;
            transition: all 0.5s;
            font-weight: 400;
            line-height: 1;
            border-radius: 15px;
            outline: none;
            &:hover {
              background: url("../../icons/search.png") 4px 4px no-repeat white;
            }
          }
        }
      }
      .container-left {
        display: flex;
        div {
          line-height: 20px;
          a {
            display: block;
            padding: 10px 15px;
            color: #ccc;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
