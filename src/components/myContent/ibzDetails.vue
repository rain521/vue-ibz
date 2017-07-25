<template>
  <div class="ibzDetails">
    <div v-title>爱包装网</div>
    <img :src="ico1" alt="logo" class="ico1" width="121">
    <br>
    <img :src="ico2" alt="二维码" class="ico2" width="200">
    <p class="p1">关注“爱包装网”公众号，了解更多资讯</p>
    <p class="p2">客服热线：<span class="color1">400-920-9688</span></p>
    <div style="position: absolute; left: 0; bottom: 20px;width: 100%;">
      <p class="p3 mb10">Copyright 2016</p>
      <p class="p4">上海宗越电子商务有限公司版权所有</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ibzDetails',
    data () {
      return {
          ico1: require('../../assets/image/logo.png'),
          ico2: require('../../assets/image/ibz8.png'),
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .ibzDetails{
    text-align: center;
    .ico1{margin: 75px 0 40px;}
    .ico2{margin: 0px 0 15px;}
    .p1{font-size: 1.3rem; color:#555; margin-bottom: 15px;}
    .p2{font-size: 1.1rem; color:#282828;}
    div{
      .p3, .p4{color: #555;font-size: 1.1rem;}
    }
  }
</style>
