<template>
  <div class="jackpot">
    <div v-title>奖池</div>
    <div class="jackpot-bac">
      <div class="tac"><img :src="ico2" width="375"></div>
      <div class="tac mt15"><img :src="ico3" width="211"></div>
      <div class="jackpot1">
        <img :src="ico4" alt="" width="375">
        <div class="jackpot1-1"><span>你上周积分：160点</span></div>
        <div class="jackpot1-2">
          <p>奖池奖金</p>
          <h2>10000 <span>元</span></h2>
        </div>
        <div class="jackpot1-3">平台上周总积分：120000点</div>
      </div>
      <div class="jackpot2">
        <img :src="ico1" width="375">
        <p>张xx</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'jackpot',
    data () {
      return {
          ico1: require('../../assets/image/jackpot2.png'),
          ico2: require('../../assets/image/jackpot3.png'),
          ico3: require('../../assets/image/jackpot4.png'),
          ico4: require('../../assets/image/jackpot5.png'),
      }
    },
    created: function () {

    },
    methods: {

    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .jackpot{
    background: linear-gradient(#eb0851, #630178);
    .jackpot-bac{
      width: 100%;
      height:100%;
      background-image: url("../../assets/image/jackpot1.png");
      background-size: 100%;
      background-repeat: repeat;
      padding-bottom: 40px;
      .jackpot1{
        position: relative;
        text-align: center;
        .jackpot1-1{
          position: absolute;
          top: 82px;
          width: 100%;
          height: 34px;
          line-height: 34px;
          font-size: 1.4rem;
          color: #fff;
        }
        .jackpot1-2{
          position: absolute;
          top: 138px;
          width: 100%;
          height: 120px;
          padding-top: 20px;
          color: #fff;
          p{
            font-size: 1.3rem;
          }
          h2{
            margin: 15px 0 0 0;
            span{
              font-size: 1rem;
            }
          }
        }
        .jackpot1-3{
          position: absolute;
          top: 268px;
          width: 100%;
          height: 28px;
          line-height: 28px;
          font-size: 1rem;
          color: #fefefe;
        }
      }
      .jackpot2{
        position: relative;
        text-align: center;
        p{
          position: absolute;
          top: 73px;
          width: 100%;
          height: 47px;
          line-height:47px;
          font-size: 1.2rem;
          color: #fff;
        }
      }
    }
  }
</style>
