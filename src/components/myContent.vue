<template>
  <div class="mycontent">
    <div v-title>个人中心</div>
    <div class="personalDetails">
      <div class="container">
        <a href="#/myMessage" class="clearfix">
          <img :src="logo" height="50" width="50" style="border-radius: 50px" class="fl mr10" alt="logo">
          <div class="fl">
            <h1>昵称</h1>
            <p>上海宗越电子商务有限公司</p>
          </div>
          <div class="fr lh50"><i class="fa fa-angle-right"></i></div>
        </a>
      </div>
    </div>
    <div class="row ibz-background1">
      <div class="col-xs-6 tac ptb10">
        <a :href="link" class="db borderR">
          <img :src="ico1" alt="工单" width="19">
          <p class="mt10 color3">我抢的工单</p>
        </a>
      </div>
      <div class="col-xs-6 tac ptb10">
        <a :href="link1" class="db">
          <img :src="ico2" alt="工单" width="19">
          <p class="mt10 color3">我发布的订单</p>
        </a>
      </div>
    </div>
    <div class=""></div>
    <mt-cell title="我的积分"
             class="mt10"
             to="/myIntegral"
             is-link>
      <img slot="icon" src="../assets/image/ibz15.png" width="15" class="mr10">
    </mt-cell>
    <div class="container"><div class="borderConter"></div></div>
    <mt-cell title="奖池"
             to="/jackpot"
             is-link>
      <img slot="icon" src="../assets/image/ibz16.png" width="15" class="mr10">
    </mt-cell>
    <mt-cell title="联系爱包装网"
             class="mt10"
             to="/ibzDetails"
             is-link>
      <img slot="icon" src="../assets/image/ibz7.png" width="15" class="mr10">
    </mt-cell>
    <div class="mt40 container">
      <button type="button" class="ibz-button7" @click="logOut">退出</button>
    </div>
    <app-foot coment="3"></app-foot>
  </div>
</template>

<script>
  import Foot from './foot.vue';
  import { Cell } from 'mint-ui';

  export default {
    name: 'mycontent',
    data () {
      return {
        logo: require('../assets/image/logo.png'),
        ico1: require('../assets/image/ibz5.png'),
        ico2: require('../assets/image/ibz6.png'),
        link:'#/grabSingle',
        link1:'#/releaseSingle'
      }
    },
    methods: {
      logOut(){
          window.location.href = '#/login'
      }
    },
    components: {
      'app-foot': Foot,
      Cell
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .personalDetails{
    height: 80px;
    background: #e9374c;
    padding-top: 15px;
    color:#fff;
    a{
      display: block;
      h1{
        font-size: 1.5rem;
        margin: 5px 0;
        color: #fff;
        font-weight: 600;
      }
      p{
        color: #fff;
        font-size: 1rem;
      }
      i{
        font-size: 2rem;
        color: #fff;
      }
    }
  }
</style>
