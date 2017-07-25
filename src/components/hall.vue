<template>
  <div class="hall">
    <div v-title>爱包装网</div>
    <app-head></app-head>
    <div class="hall-content">
      <ul>
        <li v-for="item in list" :uid="item.Uid">
          <a :href="'#/fixedPrice/?' + item.Uid">
            <div class="row borderB ptb10">
              <div class="col-xs-4 text-center hall-messageIcon">
                <img :src="item.ImageUrl">
              </div>
              <div class="col-xs-8 hall-message">
                <h1>{{ item.Title }}</h1>
                <p class="describe">{{ item.Description }}</p>
                <p class="site">{{ item.ProvinceName }}</p>
                <p class="countDown">倒计时：<span>{{ item.ValidDays }}天</span></p>
              </div>
            </div>
            <div class="hall-btn">
              <button type="button" class="ibz-button1">立即抢单</button>
            </div>
          </a>
        </li>
      </ul>
      <div class="loadingDiv">
        <p v-show="loading" @click="loadList"> {{ loadingText }} </p>
        <p v-show="loadingLoad"> {{ loadingLoadText }} </p>
      </div>
    </div>
    <app-foot coment="1"></app-foot>
  </div>
</template>

<script>
  import Foot from './foot.vue';
  import Head from './head.vue';
  import Url from '../config'

  export default {
    name: 'hall',
    data () {
      return {
        list: [],
        loading: true,
        loadingLoad: false,
        loadingText: '点击加载',
        loadingLoadText: '<i class="fa fa-spinner fa-spin" style="font-size: 1.5rem"></i>'
      }
    },
    created: function () {
      this.requestData()
    },
    methods: {
      requestData(){
        let self = this;
        self.$axios({
          method: 'post',
          url: 'http://192.168.0.222/PurchaseInfo/GetPurchaseInfoPage'
        })
          .then(function (res) {
            console.log("************************+++++++++++++++++++++++++");
            console.log(res.data.Success)
            if(res.data.Success){
              for(var i=0; i<res.data.Data.Items.length; i++){
                self.list.push(res.data.Data.Items[i])
              }
            }
          })
      },
      loadList() {
        this.loading = false;
        this.loadingLoad = true;
        setTimeout(() => {
            if(this.list.length >= 50){
              this.loading = false;
              this.loadingLoad = true;
              this.loadingLoadText = "我已经到底啦！"
            }else {
              var obj = {link: '#/details', img: require("../assets/image/ibz2.png"), product: '出口纸箱', productSize: '100*100', productionPhase: '24天', shippingAddress: '上海市徐汇区'};
              for (let i = 1; i <= 10; i++) {
                this.list.push(obj);
              }
              this.loading = true;
              this.loadingLoad = false;
            }
        }, 2500);
      }
    },
    components: {
      'app-foot': Foot,
      'app-head': Head
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .hall-content{
    overflow: auto;
    height: 100%;
    padding-bottom: 55px;
    .loadingDiv p{
      text-align center;
      height 35px;
      line-height 35px;
      margin 0;
    }
    ul {
      list-style-type: none;
      li {
        background : #fff;
        margin : 10px 0;
        overflow: hidden;
        .hall-messageIcon{
          height: 100px;
          line-height: 100px;
          text-align center;
          overflow: hidden;
          img{
            max-height: 100%;
            max-width: 100%;
          }
        }
        .hall-message{
          height: 100px;
          text-align : left;
          h1{
            height: 20px;
            line-height: 20px;
            margin: 0 0 5px 0;
            font-size: 15px;
            color: #000;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          P.describe{
            font-size: 12px;
            color: #999;
            height: 30px;
            margin: 5px 0 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
          p.site{
            font-size: 12px;
            color: #999;
            margin-bottom: 5px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          p.countDown{
            font-size: 12px;
            color: #999;
            span{
              color:red
            }
          }
        }
        .hall-btn{
          text-align: right;
          padding: 10px;
        }
      }
    }
  }

</style>
