<template>
  <div class="grabSingle">
    <div v-title>我发布的工单</div>
    <ul>
      <li v-for="item in list">
        <a :href="item.link">
          <div class="row borderB ptb10">
            <div class="col-xs-4 text-center hall-messageIcon">
              <img :src="item.img">
            </div>
            <div class="col-xs-8 hall-message">
              <h1>{{ item.product }}</h1>
              <p>了空间撒地方还看见爱上电话费了空间撒地方还看见爱上电话费了空间撒地方还看见爱上电话费了空间撒地方还看见爱上电话费了空间撒地方还看见爱上电话费</p>
              <span>上海</span>
            </div>
          </div>
          <div class="clearfix p10">
            <p class="fl lh30 f12em">倒计时：<span class="color1">10天</span></p>
            <button type="button" class="ibz-button2 fr" @click="closeOrder">关闭订单</button>
          </div>
        </a>
      </li>
    </ul>
    <div class="loadingDiv">
      <p v-show="loading" @click="loadList"> {{ loadingText }} </p>
      <p v-show="loadingLoad"> {{ loadingLoadText }} </p>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'grabSingle',
    data () {
      return {
        list: [
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'},
          {link: '#/lineItem', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'}
        ],
        loading: true,
        loadingLoad: false,
        loadingText: '点击加载',
        loadingLoadText: '加载中...'
      }
    },
    methods: {
      loadList() {
        this.loading = false;
        this.loadingLoad = true;
        setTimeout(() => {
          if(this.list.length >= 50){
            this.loading = false;
            this.loadingLoad = true;
            this.loadingLoadText = "我已经到底啦！"
          }else {
            var obj = {link: '#/details', img: require("../../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'};
            for (let i = 1; i <= 10; i++) {
              this.list.push(obj);
            }
            this.loading = true;
            this.loadingLoad = false;
          }
        }, 2500);
      },
      closeOrder(){
        MessageBox.confirm('关闭订单后其他人将看不到这条订单，是否继续关闭?').then(action => {
          alert("1")
        });
      }
    },
    components: {
      MessageBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  ul {
    list-style-type: none;
    li {
      background: #fff;
      margin: 10px 0;
      overflow: hidden;
      padding: 0 10px;
      .hall-messageIcon {
        height: 100px;
        line-height: 100px;
        text-align center;
        overflow: hidden;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
      .hall-message {
        height: 100px;
        text-align: left;
        h1 {
          height: 30px;
          line-height: 30px;
          margin: 0;
          font-size: 15px;
          color: #000;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        p {
          font-size: 12px;
          color: #999;
          margin: 5px 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-height: 18px;
          -webkit-box-orient: vertical;
          padding-right: 10px;
        }
        span{
          color: #999;
        }
      }
    }
  }

  .loadingDiv p{
    text-align center;
    height 35px;
    line-height 35px;
    margin 0;
  }

</style>
