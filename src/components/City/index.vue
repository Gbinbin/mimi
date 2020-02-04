<template>
  <section class="city_body">
    <div class="city_wrap">
      <div class="hot_city">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>Ad放到</li>
          <li>Ad放到</li>
          <li>Ad放到</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
            <li>爱吃</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "city",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
#content .city_body {
  margin-top: 45px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.hot_city h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}
.hot_city ul {
  display: flex;
  flex-wrap: wrap;
}
.hot_city ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.city_index {
  width: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #e6e6e6;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: 400;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
}
.city_body .city_sort div {
  margin-top: 20px;
}
</style>
