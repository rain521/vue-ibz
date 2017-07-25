<template>
  <div class="login">
    <div v-title>登录页</div>
    <div class="loginImg"><img :src="ico1" alt="logo" width="121"></div>
    <div class="container">
      <div class="clearfix loginDiv borderB">
        <div class="loginIco"><img :src="ico2" alt=""></div>
        <input type="text" placeholder="请输入手机号" class="loginInput" v-model="mobile" maxlength="11">
      </div>
      <div class="clearfix loginDiv">
        <div class="loginIco"><img :src="ico3" alt=""></div>
        <input type="text" placeholder="请输入验证码" v-model="authCode" class="loginInput">
        <input type="button" value="发送验证码" class="codeInput" @click="codeInput">
      </div>
      <button type="button" class="ibz-button4 mt40" @click="enter">登录</button>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'login',
    data () {
      return {
        ico1: require("../assets/image/logo.png"),
        ico2: require("../assets/image/ibz10.png"),
        ico3: require("../assets/image/ibz11.png"),
        mobile:'',
        authCode: '',
        codeValue:'发送验证码',
        wait:60
      }
    },
    computed: {},
    methods: {
      enter(){
        const iPhone = /(^(13|14|15|18|17)\d{9}$)/;
        if(this.mobile == '' || !iPhone.test(this.mobile)){
          Toast({
            message: '手机号格式不正确',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        if(this.authCode == ''){
          Toast({
            message: '请输入验证码',
            position: 'bottom',
            duration: 3000
          });
          return
        }

        window.location.href="#/relevance";
      },
      codeInput(){
        const iPhone = /(^(13|14|15|18|17)\d{9}$)/;
        if(this.mobile == '' || !iPhone.test(this.mobile)){
          Toast({
            message: '手机号格式不正确',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        this.time();
      },
      time(){
        var code = $(".codeInput");
        var _this=this;
        if (_this.wait == 0) {
          code.attr("disabled", false);
          code.val("获取验证码");
          _this.wait = 60;
        } else {
          code.attr("disabled", true);
          code.val("重新发送(" + _this.wait + ")");
          _this.wait--;
          setTimeout(function () {
            _this.time();
          }, 1000);
        }
      }
    }
  }
</script>


<style lang="stylus">
  .login {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    padding-top: 70px;
    .loginImg {
      margin-bottom: 70px;
      text-align: center;
    }
    .loginDiv {
      height: 50px;
      line-height: 50px;
      background: #f3f3f3;
      .loginIco {
        width: 50px;
        text-align: center;
        float: left;
        img {
          width: 16px;
        }
      }
      .loginInput {
        border: 0px;
        float: left;
        width: 50%;
        height: 49px;
        line-height: 19px;
        background: #f3f3f3;
      }
      .codeInput{
        float: right;
        width: 30%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #e9252e;
        color: #e9252e;
        background: #fff;
        margin: 4px 5px 0 0;
        border-radius: 3px;
      }
    }
  }
</style>
