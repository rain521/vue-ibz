<template>
  <div class="relevanceSucceed pb20">
    <div v-title>关联成功</div>
    <div class="container">
      <relevance-head></relevance-head>
      <div class="mtb20 tac">
        <img :src="ico1" width="50">
      </div>
      <div class="tac mtb20">
        <h4 class="f16 color3">关联账号“{{ accountNumber }}”成功!</h4>
        <p class="color6">3s后自动跳转至抢单大厅</p>
      </div>
      <button class="ibz-button5 mt20" @click="skip">去逛逛</button>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import relevanceHead from './relevance/relevanceHead.vue'
  export default {
    name: 'relevanceSucceed',
    data () {
      return {
        ico1: require('../assets/image/ibz14.png'),
        accountNumber: '182****2197'
      }
    },
    methods: {
      skip(){
        window.location.href="#/";
      }
    },
    components: {
      'relevance-head': relevanceHead
    }
  }
</script>


<style lang="stylus">
  .relevanceSucceed{
    background: #fff;
    .relevanceInput{
      position: relative;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 3px;
      input{
        width: 100%;
        height: 35px;
        line-height: 35px;
        border: 0px;
        padding: 0 6px;
      }
      .verifyIco{
        position: absolute;
        top: 5px;
        right: 5px;
        width: 100px;
        height: 35px;
        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }
</style>
