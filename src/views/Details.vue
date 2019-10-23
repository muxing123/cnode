<template>
  <div class="details">
    <!--    顶部标题-->
    <div class="header">
      <div class="title">
        <span class="put-top" v-if="this.details.top === true">置顶</span>
        <span
          class="put-tab"
          v-if="this.details.top === false && this.details.tab === 'share'"
          >分享</span
        >
        <span
          class="put-tab"
          v-if="this.details.top === false && this.details.tab === 'ask'"
          >问答</span
        >
        {{ this.details.title }}
      </div>
      <!--      标题下的信息-->
      <div class="msg">
        •<span v-if="this.details.sec">发布于{{ this.details.sec }}秒前</span>
        <span v-if="this.details.min">发布于{{ this.details.min }}分钟前</span>
        <span v-if="this.details.hours"
          >发布于{{ this.details.hours }}小时前</span
        >
        <span v-if="this.details.day">发布于{{ this.details.day }}天前</span>
        <span v-if="this.details.mon">发布于{{ this.details.mon }}个月前</span>
        <span v-if="this.details.yea">发布于{{ this.details.yea }}年前</span>
        •<span>作者{{ this.details.author.loginname }}</span> •<span
          >{{ this.details.visit_count }}次浏览</span
        >
        •<span v-if="this.details.tab === 'share'">来自 分享</span>
        <span v-if="this.details.tab === 'ask'">来自 问答</span>
      </div>
    </div>
    <!--    文章内容-->
    <div v-html="this.details.content" class="content"></div>
    <!--  回复部分-->
    <div class="replay">
      <div class="header">{{ this.details.replies.length }} 回复</div>
      <!--      回帖-->
      <div
        class="replay_area"
        v-for="(item, index) in this.details.replies"
        :key="index"
      >
        <div class="replay_author">
          <img :src="item.author.avatar_url" alt="作者图片" class="img1" />
          <div class="user_info">
            <span class="name">{{ item.author.loginname }}</span>
            <span class="replay_floor"
              >{{ index + 1 }}楼•<span v-if="item.sec">{{ item.sec }}秒前</span>
              <span v-if="item.min">{{ item.min }}分钟前</span>
              <span v-if="item.hours">{{ item.hours }}小时前</span>
              <span v-if="item.day">{{ item.day }}日前</span>
              <span v-if="item.mon">{{ item.mon }}个月前</span>
              <span v-if="item.yea">{{ item.yea }}年前</span>
            </span>
          </div>
          <div class="author_up">
            <img src="../icons/up.png" alt="点赞" /><span class="up_count">{{
              item.ups.length
            }}</span>
          </div>
        </div>
        <div class="replay_content" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      details: {}
    };
  },
  methods: {
    getDetails() {
      this.$axios
        .req(`/api/topic/${this.id}`)
        .then(res => {
          this.details = res.data;
          //计算发布时间
          let nowTime = Date.now();
          this.details.replies.map(item => {
            let different = nowTime - this.$dayjs(item.create_at).valueOf();
            let time = different / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              if (min < 1) {
                let sec = Math.ceil(min * 60);
                this.$set(item, "sec", sec);
              } else {
                this.$set(item, "min", min);
              }
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              if (day < 30) {
                this.$set(item, "day", day);
              } else if (day >= 30 && day < 365) {
                let mon = Math.floor(day / 30);
                this.$set(item, "mon", mon);
              } else {
                let yea = Math.floor(day / 365);
                this.$set(item, "yea", yea);
              }
            } else {
              let hours = Math.floor(time);
              this.$set(item, "hours", hours);
            }
          });
          let different =
            nowTime - this.$dayjs(this.details.create_at).valueOf();
          let time = different / 1000 / 60 / 60;
          if (time < 1) {
            let min = Math.floor(time * 60);
            if (min < 1) {
              let sec = Math.ceil(min * 60);
              this.$set(this.details, "sec", sec);
            } else {
              this.$set(this.details, "min", min);
            }
          } else if (time > 24) {
            let day = Math.ceil(time / 24);
            if (day < 30) {
              this.$set(this.details, "day", day);
            } else if (day >= 30 && day < 365) {
              let mon = Math.floor(day / 30);
              this.$set(this.details, "mon", mon);
            } else {
              let yea = Math.floor(day / 365);
              this.$set(this.details, "yea", yea);
            }
          } else {
            let hours = Math.floor(time);
            this.$set(this.details, "hours", hours);
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getDetails();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.details {
  width: 909.09px;
  font-size: 14px;
  word-break: break-word;
  line-height: 20px;
  color: #333;
  margin-bottom: 13px;
  margin-right: 15px;
  /*顶部样式*/
  .header {
    background-color: #fff;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    .title {
      font-size: 22px;
      font-weight: 700;
      margin: 8px 0;
      vertical-align: bottom;
      width: 75%;
      line-height: 130%;
      .put-top {
        background: #80bd01;
        padding: 2px 4px;
        font-size: 12px;
        color: white;
        border-radius: 3px;
        position: relative;
        top: 0px;
      }
      .put-tab {
        background: #e5e5e5;
        color: #999;
        padding: 2px 4px;
        font-size: 12px;
        border-radius: 3px;
        position: relative;
        top: 0px;
      }
    }
    /*  标题栏下信息*/
    .msg {
      font-size: 12px;
      color: #838383;
    }
  }
  /*  内容样式*/
  .content {
    background: white;
    overflow: hidden;
    padding: 10px 20px;
    border-top: 1px solid #e5e5e5;
  }
  /*  回复样式*/
  .replay {
    margin-top: 13px;
    .header {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
    }
    /*  回帖样式*/
    .replay_area {
      /*background-color: #f4fcf0;*/
      padding: 10px;
      background: #fff;
      border-top: 1px solid #f0f0f0;
      /*  作者部分*/
      .replay_author {
        position: relative;
        .img1 {
          width: 30px;
          height: 30px;
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .user_info {
          display: inline-block;
          margin-left: 40px;
          .name {
            color: #666;
            font-size: 12px;
            font-weight: 700;
          }
          .replay_floor {
            font-size: 11px;
            color: #08c;
            margin-left: 5px;
          }
        }
        .author_up {
          position: absolute;
          right: 0px;
          top: 0px;
          margin-left: 20px;
          font-size: 15px;
          img {
            width: 20px;
          }
          .up_count {
            color: gray;
            position: relative;
            bottom: 4px;
          }
        }
      }
      /*  回帖内容*/
      .replay_content {
        padding-left: 50px;
        color: #333;
      }
    }
  }
}
</style>
