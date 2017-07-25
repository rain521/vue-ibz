<template>
  <div class="lineItem">
    <div v-title>订单详情</div>
    <div>
      <div class="container">
        <div class="detailsTitle"><span>采购信息</span></div>
      </div>
      <div class="ibz-background1 pb10">
        <div class="container">
          <div class="field borderB clearfix">
            <label class="fl">标题</label>
            <input class="fr" type="text" v-model="title" readonly>
          </div>
          <div class="describe">
            <label>描述</label>
            <textarea rows="4" class="mint-field-core" v-model="describe" readonly></textarea>
          </div>
          <div class="imgthumb">
            <label>商品图片</label>
            <ul class="oulThumb">
              <li v-for="img in imgthumb">
                <img :src="img">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="detailsTitle"><span>生产要求</span></div>
      </div>
      <div class="ibz-background1">
        <div class="container">
          <div class="field borderB clearfix">
            <label class="fl">联系方式</label>
            <input class="fr" type="text" v-model="phone" maxlength="11" readonly>
          </div>
          <div class="field borderB clearfix">
            <label class="fl">报价截止日期</label>
            <input class="fr" type="text" v-model="expirationDate" readonly>
          </div>
          <div class="field clearfix">
            <label class="fl">收货地址</label>
            <input class="fr" type="text" v-model="siteCotent" readonly>
          </div>
        </div>
      </div>

      <div class="detailsBtn">
        <button type="button" class="redPacketBtn" @click="closeOrder">关闭订单</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'lineItem',
    data () {
      return {
        title:'111111',
        describe:'222222222',
        phone:'333333',
        expirationDate:'444444444',
        imgthumb:['http://avatar.csdn.net/C/8/A/1_luckylqh.jpg','http://avatar.csdn.net/C/8/A/1_luckylqh.jpg','http://avatar.csdn.net/C/8/A/1_luckylqh.jpg','http://avatar.csdn.net/C/8/A/1_luckylqh.jpg'],
        siteCotent:'上海市徐汇区'
      }
    },
    created: function () {

    },
    methods: {
      closeOrder(){
        MessageBox.confirm('关闭订单后其他人将看不到这条订单，是否继续关闭?').then(action => {
          console.log(action)
        }).catch(function(e) {
          console.log(e)
        });
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  label{font-size: 1.1rem;color: #282828;text-align: left;}
  .detailsTitle{
    height: 40px;
    line-height: 40px;
    span{
      font-size: 1.5rem;
      color: #282828;
    }
  }
  .field{
    height: 48px;
    line-height: 48px;
    padding: 0 5px;
    input{
      width: 70%;
      text-align: right;
      border: 0px;
      height: 47px;
      line-height: 47px;
    }
  }
  .describe, .imgthumb{
    padding: 0 5px;
    label{
      height: 48px;
      line-height: 48px;
      display: block;
    }
    textarea{
      border: 1px solid #ddd;
      padding: 10px;
    }
    ul.oulThumb li{
      float: left;
      width: 70px;
      height: 70px;
      text-align: center;
      border: 1px solid #ddd;
      margin: 5px 10px 5px 0;
      padding: 5px;
    }
    img{
      max-width:100%;
      max-height: 100%;
    }
    li.thumbBtn{
      color: #444;
      i{
        display: block;
        font-size: 1.5rem;
        margin: 10px 0;
      }
    }
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
      background: #fff;
      border: 1px solid #e9252e;
      color: #e9252e;
      border-radius:3px;
      font-size: 1.3rem;
    }
    .redPacketBtn:active{
      background: #e9252e;
      color: #fff;
    }
  }
</style>
