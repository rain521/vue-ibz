<template>
  <div class="relevance">
    <div v-title>关联爱包装网账号</div>
    <div class="container">
      <relevance-head></relevance-head>
      <div class="mtb20 tac">
        <img :src="ico1" width="266">
      </div>
      <div class="relevanceFrom">
        <div class="relevanceInput"><input type="text" v-model="mobile" placeholder="已验证手机号" maxlength="11"></div>
        <div class="relevanceInput"><input type="text" v-model="passworld" placeholder="请输入登录密码"></div>
        <div class="relevanceInput">
          <input type="text" v-model="authCode" placeholder="请输入图片验证码">
          <div class="verifyIco">
            <img :src="ico2">
          </div>
        </div>
        <button class="ibz-button5 mt20" @click="relevance">确认关联</button>
        <div class="mtb20 tar"><a href="" class="color2">忘记密码？</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import relevanceHead from './relevance/relevanceHead.vue'
  export default {
    name: 'relevance',
    data () {
      return {
        ico1: require('../assets/image/ibz13.png'),
        ico2: require('../assets/image/logo.png'),
        mobile:'',
        passworld:'',
        authCode:'',
      }
    },
    methods: {
      relevance(){
        const iPhone = /(^(13|14|15|18|17)\d{9}$)/;
        if(this.mobile == '' || !iPhone.test(this.mobile)){
          Toast({message: '手机号格式不正确', position: 'bottom', duration: 3000});
          return
        }
        if(this.passworld == ''){
          Toast({message: '请输入密码', position: 'bottom', duration: 3000});
          return
        }
        if(this.authCode == ''){
          Toast({message: '请输入验证码', position: 'bottom', duration: 3000});
          return
        }
        window.location.href="#/relevanceSucceed";
      }
    },
    components: {
      'relevance-head': relevanceHead
    }
  }
</script>


<style lang="stylus">
  .relevance{
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
