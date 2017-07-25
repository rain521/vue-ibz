<template>
  <div class="fixedPrice">
    <div v-title>详情</div>
    <app-details></app-details>
    <div class="container">
      <div class="detailsTitle"><span>采购商信息</span></div>
    </div>
    <div class="ibz-background1">
      <div class="container purchaserDetails">
        <span class="color1">红包解锁可查看采购商详情</span>
      </div>
    </div>
    <div class="detailsBtn">
      <button type="button" class="redPacketBtn"><i class="fa fa-lock mr5"></i>3元红包解锁</button>
    </div>
  </div>
</template>

<script>
  import details from './component/details.vue'
  export default {
    name: 'fixedPrice',
    data () {
      return {
        indicators: false
      }
    },
    created: function () {

    },
    methods: {

    },
    components: {
      'app-details': details
    }
  }
</script>


<style lang="stylus">
  .detailsTitle{
    height: 40px;
    line-height: 40px;
    span{
      font-size: 1.5rem;
      color: #282828;
    }
  }

  .purchaserDetails {
    min-height: 80px;
    padding: 10px;
  }
  .detailsBtn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ddd;
    text-align: center;
    background: #fff;
    padding-top: 5px;
    z-index : 1;
    .redPacketBtn{
      width: 80%;
      height: 40px;
      background: #e9252e;
      color: #fff;
      border-radius:3px;
      font-size: 1.3rem;
    }
  }
</style>
