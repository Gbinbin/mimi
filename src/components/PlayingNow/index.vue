<template>
  <div class="movies_body" ref="movie_body">
    <ul>
      <li>{{ pullDownMsg }}</li>
      <li v-for="item in movieList" :key="item.id">
        <div class="pic_show" @tap="handleToDetail">
          <img :src="item.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2>
            {{item.nm}}
            <img v-if="item.version" src="@/assets/max.png" />
          </h2>
          <p>
            观众评
            <span class="grade">{{ item.sc }}</span>
          </p>
          <p>主演：{{ item.star }}</p>
          <p>{{ item.showInfo }}</p>
        </div>
        <div class="btn btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "playingNow",
  data() {
    return {
      movieList: [],
      pullDownMsg: ""
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        this.$nextTick(() => {
          //上面的数据加载完成后，才能触发的函数。
          var scroll = new BScroll(this.$refs.movie_body, {
            //添加better-scroll插件事件
            tap: true, //允许tap事件发生
            probeType: 1 //添加scroll事件，并且节流。
          });
          scroll.on("scroll", pos => {
            //下拉触发的函数

            //console.log("scroll");
            if (pos.y > 30) {
              this.pullDownMsg = "正在更新中";
            }
          });
          scroll.on("touchEnd", pos => {
            //下拉结束触发的函数
            //console.log("touchEnd");
            if (pos.y > 30) {
              this.axios.get("/api/movieOnInfoList?cityId=100").then(res => {
                var msg = res.data.msg;
                if (msg === "ok") {
                  this.pullDownMsg = "更新成功";
                  setTimeout(() => {
                    this.movieList = res.data.data.movieList;
                    this.pullDownMsg = "";
                  }, 1000);
                }
              });
            }
          });
        });
      }
    });
  },
  methods: {
    handleToDetail() {
      console.log("handleToDetail");
    }
  }
};
</script>

<style scoped>
.movies_body {
  flex: 1;
  overflow: auto;
  padding-bottom: 45px;
}
.movies_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movies_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movies_body .pic_show {
  width: 64px;
  height: 90px;
  overflow: hidden;
}
.movies_body .pic_show img {
  width: 100%;
  display: block;
}
.movies_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movies_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movies_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movies_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movies_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movies_body .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f90;
  color: #fff;
}
</style>
