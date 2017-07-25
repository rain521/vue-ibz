<template>
  <div class="bidding pb70">
    <div v-title>详情</div>
    <app-details></app-details>
    <div class="container">
      <div class="detailsTitle"><span>采购商信息</span></div>
    </div>
    <div class="ibz-background1">
      <div class="container purchaserDetails">
        <span class="color1">竞价中标后可查看采购商详情</span>
      </div>
    </div>
    <div class="container">
      <div class="detailsTitle">
        <span class="fl">竞价人员</span>
        <a class="fr bidRules">查看竞价规则</a>
      </div>
    </div>
    <div class="ibz-background1 ptb10">
      <div class="container">
        <ul class="row" v-if="forResults">
          <li class="col-xs-2 tac mtb10" v-for="item in forStaff"><img :src="item" width="40" height="40" style="border-radius: 40px;"></li>
        </ul>
        <ul v-else="forResults">
          <li class="mtb10" v-for="item in forResultsList">
            <img :src="item.img" width="40" height="40" style="border-radius: 40px;">
            <span style="font-size: 1.2rem;color:#333;margin-left: 5px;">{{ item.userName }}, 竞价： {{ item.cost }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="detailsBtn">
      <button type="button" class="redPacketBtn" v-if="notBid" @click="notBidBtn"><i class="fa fa-lock mr5"></i>我要竞价
      </button>
      <div class="clearfix startBid container" v-if="startBid">
        <div class="auctionInput">
          <span class="auctionSubtract color3" @click="auctionSubtract">-</span>
          <input type="text" v-model="auctionValue">
          <span class="auctionPlus color1" @click="auctionPlus">+</span>
        </div>
        <button class="ibz-button1" @click="startBidBtn">竞价</button>
      </div>
      <div class="haveBid clearfix container" v-if="haveBid">
        <p class="fl">竞价：<span class="color1">{{ auctionValue }}</span></p>
        <button type="button">已竞价</button>
      </div>
    </div>
  </div>
</template>

<script>
  import details from './component/details.vue'
  import {MessageBox, Toast} from 'mint-ui';
  export default {
    name: 'bidding',
    data () {
      return {
        forResults: true,
        forStaff: [require('../../assets/image/ibz1.png'), require('../../assets/image/ibz2.png'), require('../../assets/image/ibz7.png'), require('../../assets/image/ibz4.png'), require('../../assets/image/ibz5.png'), require('../../assets/image/ibz6.png'),
          require('../../assets/image/ibz1.png'), require('../../assets/image/ibz2.png'), require('../../assets/image/ibz7.png'), require('../../assets/image/ibz4.png'), require('../../assets/image/ibz5.png'), require('../../assets/image/ibz6.png'),
          require('../../assets/image/ibz1.png'), require('../../assets/image/ibz2.png'), require('../../assets/image/ibz7.png'), require('../../assets/image/ibz4.png'), require('../../assets/image/ibz5.png'), require('../../assets/image/ibz6.png'),
          require('../../assets/image/ibz1.png'), require('../../assets/image/ibz2.png'), require('../../assets/image/ibz7.png'), require('../../assets/image/ibz4.png'), require('../../assets/image/ibz5.png'), require('../../assets/image/ibz6.png'),
          require('../../assets/image/ibz1.png'), require('../../assets/image/ibz2.png'), require('../../assets/image/ibz7.png'), require('../../assets/image/ibz4.png'), require('../../assets/image/ibz5.png'), require('../../assets/image/ibz6.png')],
        forResultsList:[
          {img:require('../../assets/image/ibz6.png'),userName:'张XX',cost:'190'},
          {img:require('../../assets/image/ibz7.png'),userName:'张XX',cost:'190'},
          {img:require('../../assets/image/ibz8.png'),userName:'张XX',cost:'190'},
          {img:require('../../assets/image/ibz9.png'),userName:'张XX',cost:'190'},
          {img:require('../../assets/image/ibz10.png'),userName:'张XX',cost:'190'}
        ],
        notBid: true, //未竞拍
        startBid: false, //开始竞拍
        auctionValue: 100,
        haveBid: false //已竞拍
      }
    },
    created: function () {

    },
    methods: {
      notBidBtn(){
        this.notBid = false;
        this.startBid = true;
        this.haveBid = false;
      },
      startBidBtn(){
        MessageBox.confirm('竞拍后价格将不可更改， 是否确定此价格?').then(action => {
          this.notBid = false;
          this.startBid = false;
          this.haveBid = true;
          this.forResults = false;
          MessageBox('提示', '参与竞拍成功');
        });
      },
      auctionSubtract(){ //减
        if (this.auctionValue <= 100) {
          this.auctionValue = 100;
          Toast({
            message: '竞拍价不能低于100元',
            position: 'bottom',
            duration: 3000
          });
        } else {
          this.auctionValue -= 10
        }
      },
      auctionPlus(){ //加
        this.auctionValue += 10
      }
    },
    components: {
      'app-details': details
    }
  }
</script>


<style lang="stylus">
  .detailsTitle {
    height: 40px;
    line-height: 40px;
    span {
      font-size: 1.5rem;
      color: #282828;
    }
  }

  .purchaserDetails {
    min-height: 80px;
    padding: 10px;
  }

  .bidRules {
    font-size: 12px;
    color: #7695d5;
  }

  .detailsBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ddd;
    text-align: center;
    background: #fff;
    padding-top: 5px;
    z-index: 1;
    .redPacketBtn {
      width: 80%;
      height: 40px;
      background: #e9252e;
      color: #fff;
      border-radius: 3px;
      font-size: 1.3rem;
    }
    .startBid {
      .auctionInput {
        float: left;
        border: 1px solid #ddd;
        border-radius: 3px;
        span {
          float: left;
          display: block;
          width: 38px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          font-size: 2rem;
        }
        span:active {
          background: #ddd;
        }
        input {
          float: left;
          width: 150px;
          height: 38px;
          line-height: 38px;
          border-top: 0px;
          border-bottom: 0px;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          text-align: center;
          color: #e9252e;
        }
      }
      button {
        height: 40px;
        line-height: 40px;
        float: right;
        padding: 0 20px;
      }
    }
    .haveBid {
      p {
        float: left;
        height: 40px;
        line-height: 40px;
        font-size: 1.2rem
        span {
          font-size: 1.5rem
        }
      }
      button {
        height: 40px;
        line-height: 40px;
        float: right;
        padding: 0 20px;
        background: #fff;
        border: 1px solid #c3c3c3;
        color: #414141;
        border-radius: 3px;
      }
    }
  }
</style>
