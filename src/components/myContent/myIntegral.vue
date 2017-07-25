<template>
  <div class="myIntegral">
    <div v-title>我的积分</div>
    <div class="integral1">
      <p>周积分</p>
      <div>
        <span>600</span>点
      </div>
    </div>

    <div class="row ibz-background1">
      <div class="col-xs-6 tac ptb20">
        <div class="borderR integral2">
          <p>月积分</p>
          <h3 class="mt5">1600</h3>
        </div>
      </div>
      <div class="col-xs-6 tac ptb20">
        <div class="integral2">
          <p>总积分</p>
          <h3 class="mt5">3600</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="detailsTitle"><span>积分记录</span></div>
    </div>
    <div class="ibz-background1">
      <div class="container">
        <ul class="integral3">
          <li v-for="item in integralList" class="borderB">
            <div class="clearfix">
              <h4 class="fl">{{ item.title }}</h4>
              <span class="fr color1">+{{ item.credits }}</span>
            </div>
            <p>{{ item.time }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'myIntegral',
    data () {
      return {
          integralList:[
            {title:'抢单积分', credits:'20', time: '2017-07-10 12:00'},
            {title:'订单积分', credits:'110', time: '2017-07-10 12:00'},
            {title:'订单积分', credits:'10', time: '2017-07-10 12:00'},
            {title:'抢单积分', credits:'220', time: '2017-07-10 12:00'},
            {title:'订单积分', credits:'230', time: '2017-07-10 12:00'},
            {title:'订单积分', credits:'240', time: '2017-07-10 12:00'}
          ]
      }
    },
    created: function () {
      this.$nextTick(function(){
        console.log('11')
        $(".integral3").children("li:last-child").removeClass("borderB")
      })
    },
    methods: {

    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .integral1{
    height: 120px;
    background: #e73247;
    text-align: center;
    color: #fff;
    padding-top: 25px;
    p{
      font-size: 1.1rem;
      margin: 0px 0 15px;
    }
    div{
      span{
        font-size: 2rem;
      }
    }
  }
  .integral2{
    p{
      color: #666
    }
    h3{
      color: #222;
      font-weight: 400;
      margin: 10px 0 0 0;
    }
  }
  .integral3{
    li{
      padding: 10px 5px;
      h4{
        font-weight: 400;
        color: #333;
        margin: 0 0 10px 0;
        font-size: 1.2rem;
      }
      p{
        color: #999;
      }
    }
  }
</style>
