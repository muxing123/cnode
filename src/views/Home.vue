<template>
  <div>
    <el-container>
      <el-header height="50px"><top></top></el-header>
      <div class="middle"><router-view></router-view><Aside></Aside></div>
      <el-footer height=""><bottom></bottom></el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import top from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import bottom from "../components/Footer/Footer";
export default {
  name: "home",
  components: {
    top,
    Aside,
    bottom
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "../styles/common";
.el-header {
  padding: 0;
}
.el-footer {
  padding: 0;
  background: white;
}
.el-main {
  padding: 0;
}
.middle {
  display: flex;
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
}
</style>
