<template>
  <div class="main">
    <div class="main-left">
      <!--内容分类-->
      <div class="top">
        <a :class="{ green: num === 0 }" @click="set(0)">全部</a>
        <a :class="{ green: num === 1 }" @click="set(1)">精华</a>
        <a :class="{ green: num === 2 }" @click="set(2)">分享</a>
        <a :class="{ green: num === 3 }" @click="set(3)">问答</a>
        <a :class="{ green: num === 4 }" @click="set(4)">招聘</a>
        <a :class="{ green: num === 5 }" @click="set(5)">客户端测试</a>
      </div>
      <!--帖子部分-->
      <div
        class="inner"
        v-for="(item, index) in list.slice(
          pages * (pagesNum - 1),
          pagesNum * pages
        )"
        :key="index"
      >
        <img :src="item.author.avatar_url" alt="" />
        <span class="count">
          <span class="count-reply">{{ item.reply_count }}</span>
          /<span class="count-visit">{{ item.visit_count }}</span>
        </span>
        <span class="put-top" v-if="item.top === true">置顶</span>
        <span class="put-tab" v-if="item.top === false && item.tab === 'share'"
          >分享</span
        >
        <span class="put-tab" v-if="item.top === false && item.tab === 'ask'"
          >问答</span
        >
        <div class="title" @click="goTo(item)">{{ item.title }}</div>
        <div class="reply-date" v-if="item.day">{{ item.day }}天前</div>
        <div class="reply-date" v-if="item.hours">{{ item.hours }}小时前</div>
        <div class="reply-date" v-if="item.min">{{ item.min }}分钟前</div>
      </div>
      <!--翻页部分-->
      <div class="page">
        <Pagination
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../Pagination/Pagination";
import { Loading } from "element-ui";
export default {
  name: "Main",
  components: {
    Pagination
  },
  props: {},
  data() {
    return {
      num: 0,
      list: [],
      pages: 40,
      pagesNum: 1,
      loadingInstance: "null"
    };
  },
  methods: {
    goTo(item) {
      this.$router.push({ name: "details", query: { id: item.id } });
    },
    set(data) {
      this.num = data;
    },
    getArticle() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.list = res.data;
          //页面加载效果
          if (this.list.length > 0) {
            this.$nextTick(() => {
              this.loadingInstance.close();
            });
          }
          let nowTime = Date.now();
          this.list.map(item => {
            let different = nowTime - this.$dayjs(item.last_reply_at).valueOf();
            let time = different / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min);
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hours = Math.floor(time);
              this.$set(item, "hours", hours);
            }
          });
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  改变每页条数
    handleSizeChange(data) {
      this.pages = data;
      console.log(this.pages);
    },
    //  改变当前页
    handleCurrentChange(data) {
      this.pagesNum = data;
      console.log(this.pagesNum);
    }
  },
  mounted() {
    this.getArticle();
    //页面加载效果
    this.loadingInstance = Loading.service({ text: "加载中..." });
    // this.$nextTick(() => {
    //   this.getArticle()
    // })
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.main {
  .main-left {
    width: 909.09px;
    font-size: 14px;
    word-break: break-word;
    line-height: 20px;
    color: #333;
    margin-bottom: 13px;
    margin-right: 15px;
    .top {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      a {
        margin: 0 10px;
        color: #80bd01;
        &:hover {
          color: #08c;
        }
      }
      .green {
        background: #80bd01;
        color: white;
        padding: 3px 4px;
        border-radius: 3px;
        &:hover {
          color: white;
        }
      }
    }
    .inner {
      height: 30px;
      padding: 10px;
      border-bottom: 1px solid #f0f0f0;
      background: white;
      position: relative;
      &:hover {
        background-color: #f6f6f6;
      }
      img {
        width: 30px;
        height: 30px;
      }
      .count {
        width: 70px;
        display: inline-block;
        text-align: center;
        position: relative;
        top: -8px;
        .count-reply {
          color: #9e78c0;
        }
        .count-visit {
          font-size: 10px;
          color: #b4b4b4;
        }
      }
      .put-top {
        background: #80bd01;
        padding: 2px 4px;
        font-size: 12px;
        color: white;
        border-radius: 3px;
        position: relative;
        top: -8px;
      }
      .put-tab {
        background: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 3px;
        position: relative;
        top: -8px;
      }
      .title {
        display: inline-block;
        max-width: 70%;
        color: #333;
        font-size: 16px;
        position: relative;
        top: -5px;
        margin-left: 4px;
        overflow: hidden;
        height: 20px;
        line-height: 20px;
        &:hover {
          text-decoration: underline;
        }
      }
      .reply-date {
        display: inline-block;
        position: absolute;
        top: 16px;
        right: 9px;
        min-width: 50px;
        color: #778087;
        font-size: 11px;
        text-align: right;
      }
    }
    /* 翻页部分样式*/
    .page {
      margin-top: 10px;
    }
  }
}
</style>
