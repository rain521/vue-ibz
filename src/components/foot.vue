<template>
  <!--<mt-tabbar class="foot" v-model="selected" fixed>-->
    <!--<mt-tab-item id="抢单大厅" href="#/">-->
      <!--<img slot="icon" :src="ico1" height="24">-->
      <!--抢单大厅-->
    <!--</mt-tab-item>-->
    <!--<mt-tab-item id="发布询盘" href="#/ReleaseEnquiries">-->
      <!--<img slot="icon" :src="ico2">-->
    <!--</mt-tab-item>-->
    <!--<mt-tab-item id="个人中心" href="#/myContent">-->
      <!--<img slot="icon" :src="ico3" height="24">-->
      <!--个人中心-->
    <!--</mt-tab-item>-->
  <!--</mt-tabbar>-->
  <div class="foot">
    <ul class="row">
      <li class="col-xs-4" v-if="!selected1">
        <a href="#/">
          <img :src="ico1" alt="" height="20">
          <p class="color6">抢单大厅</p>
        </a>
      </li>

      <li class="col-xs-4" v-else>
        <a href="#/">
          <img :src="ico11" alt="" height="20">
          <p class="color1">抢单大厅</p>
        </a>
      </li>

      <li class="col-xs-4">
        <a href="#/ReleaseEnquiries" class="prt footIssue">
          <img :src="ico2" alt="">
        </a>
      </li>
      <li class="col-xs-4" v-if="!selected3">
        <a href="#/myContent">
          <img :src="ico3" alt="" height="20">
          <p class="color6">个人中心</p>
        </a>
      </li>
      <li class="col-xs-4" v-else>
        <a href="#/myContent">
          <img :src="ico31" alt="" height="20">
          <p class="color1">个人中心</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  export default {
    name: 'foot',
    props: ['coment'],
    data () {
      return {
        fixed: true,
        ico1: require('../assets/image/foot1.png'),
        ico11: require('../assets/image/foot1-1.png'),
        ico2: require('../assets/image/foot2.png'),
        ico3: require('../assets/image/foot3.png'),
        ico31: require('../assets/image/foot3-1.png'),
        selected1:true,
        selected2:false,
        selected3:true
      }
    },
    created: function () {
      this.x();
    },
    methods: {
        x() {
          console.log(this.$data);
          console.log(this.coment);
        if(this.coment == 1){this.selected1 = true;this.selected2 = false;this.selected3 = false;}
        else if(this.coment == 2){this.selected1 = false;this.selected2 = true;this.selected3 = false;}
        else if(this.coment == 3){this.selected1 = false;this.selected2 = false;this.selected3 = true;}
        console.log(this.selected1)
        console.log(this.selected2)
        console.log(this.selected3)
        }
    }
  }
</script>


<style lang="stylus">
  .foot{
    position: fixed;
    left:0;
    bottom:0;
    right: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
    text-align: center;
    ul{
      li{
        a{
          display: block;
          padding-top: 5px;
          height: 50px;
          p{
            margin-top: 5px;
          }
        }
        a.footIssue{
          position: relative;
          img{
            width: 46px;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -23px;
          }
        }
      }
    }
  }
</style>
