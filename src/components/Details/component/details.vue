<template>
  <div class="details">
    <div class="ibz-swipe">
      <mt-swipe :auto="4000" :speed="500" :showIndicators="indicators">
        <mt-swipe-item v-for="item in ico">{{ item }}</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="ibz-background1 pb10">
      <div class="container">
        <div class="detailsTitle"><span>时尚广告画册</span></div>
        <div class="clearfix mb10 lh20">
          <div class="fl color5 verifyOk">信息已验证</div>
          <div class="fr color1">距结束仅剩：<span>40天</span></div>
        </div>
        <div class="color6">描述：xxxxxxxxxx</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    name: 'details',
    data () {
      return {
        ico: [1,2],
        indicators: false
      }
    },
    created: function () {
      this.init()
    },
    methods: {
        init(){
            if(this.ico.length > 1){this.indicators = true}else {this.indicators = false}
        }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>


<style lang="stylus">
  .ibz-swipe{
    height:200px;
    text-align: center;
    font-size: 3rem;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
  .verifyOk{
    padding-left: 20px;
    background: url("../../../assets/image/ibz4.png") no-repeat left center;
    background-size: 12px;
  }
</style>
