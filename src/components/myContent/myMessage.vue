<template>
  <div class="myMessage">
    <div v-title>账户资料</div>
    <div class="ibz-background1">
      <div class="container">
        <div class="field borderB clearfix">
          <label class="fl">头像</label>
          <img :src="logo" alt="logo" class="fr" width="30" height="30" style="margin-top: 9px;border-radius: 30px;">
        </div>
        <div class="field borderB clearfix">
          <label class="fl">昵称</label>
          <input class="fr" type="text" v-model="nickname" placeholder="请输入昵称">
        </div>
        <div class="field borderB clearfix">
          <label class="fl">公司名称</label>
          <input class="fr" type="text" v-model="firmname" placeholder="请输入公司名称">
        </div>
        <div class="field borderB clearfix">
          <label class="fl">联系人</label>
          <input class="fr" type="text" v-model="linkmanContacts" placeholder="请输入联系人">
        </div>
        <div class="field clearfix">
          <label class="fl">手机号</label>
          <input class="fr" type="text" v-model="mobile" placeholder="请输入手机号">
        </div>
      </div>
    </div>
    <div class="tac messageBtn">
      <button type="button" class="ibz-button1" @click="messageSubmit">保存信息</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myMessage',
    data () {
      return {
        logo: require('../../assets/image/logo.png'),
        nickname:'rain',
        firmname:'爱包装',
        linkmanContacts:'rain',
        mobile:'182****2197'
      }
    },
    created: function () {

    },
    methods: {
      messageSubmit(){
          console.log(this.logo)
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

  .field{
    height: 48px;
    line-height: 48px;
    padding: 0 5px;
    label{font-size: 1.1rem;color: #282828;text-align: left;}
    input{
      width: 70%;
      text-align: right;
      border: 0px;
      height: 47px;
      line-height: 47px;
    }
  }
  .messageBtn{
    margin-top: 20px;
    text-align: center;
    button{
      width: 80%;
      height: 35px;
      line-height: 35px;
      font-size: 1.3rem;
    }
  }
</style>
