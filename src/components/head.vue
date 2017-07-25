<template>
  <header class="head">
    <div class="row head-top">
      <input type="text" class="col-xs-10" @click="seekBtn">
      <i class="col-xs-2 tar lh30" @click="screen">三</i>
    </div>
    <mt-popup
      class="w80p"
      v-model="popupScreen"
      position="right"
      style="height: 100%;background: #f2f2f2;">
      <div class="clearfix ibz-background1 ptb5">
        <div class="container tac lh30">
          <button class="ibz-button3 fl" @click="cancelScreen">取消</button>
          <span class="f16">筛选</span>
          <button class="ibz-button1 fr" @click="confirmScreen">确定</button>
        </div>
      </div>
      <div class="field ibz-background1 clearfix mt10">
        <label class="fl">收货地址</label>
        <span class="fr" @click="site">{{ pro }}{{ city }}<i class="fa fa-angle-right f14 ml5"></i></span>
      </div>
      <!--<div class="container">-->
        <!--<div class="detailsTitle"><span>分类</span></div>-->
      <!--</div>-->
      <div>
        <mt-checklist
          title="分类"
          align="right"
          v-model="value"
          :options="['optionA', 'optionB', 'optionC']">
        </mt-checklist>
      </div>
    </mt-popup>
    <mt-popup
      class="w100p"
      v-model="popupVisible"
      position="bottom"
    >
      <div class="clearfix">
        <mt-button size="large" class="w50p fl" @click="siteHide">取消</mt-button>
        <mt-button size="large" class="w50p fr" @click="siteConfirm">确定</mt-button>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3"></mt-picker>
    </mt-popup>
    <div class="seekList" v-show="seekList">
      <div class="seekTop row">
        <div class="col-xs-2 ibz-ico1 lh30" @click="callOff">返回</div>
        <input type="text" class="col-xs-10 searchValue" id="seekVue" v-model="searchValue" placeholder="请输入要搜索的商品名称">
        <!--<div class="col-xs-2 p0">-->
          <!--<button type="button" class="ibz-button1 fr">搜索</button>-->
        <!--</div>-->
      </div>
      <div class="mt10">
        <div class="seekLately borderB pb10 container" v-show="recentSearch">
          <div class="clearfix lh35">
            <span class="fl title1">最近搜索</span>
            <button type="button" class="fr ibz-button2">清除</button>
          </div>
          <ul class="row seekLatelyOul">
            <li class="col-xs-3" v-for="item in seekLately">
              <a :href="item.link"> {{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="seekContent" v-show="searchResult">
          <div class="container lh35">
            <span class="title1">搜索列表</span>
          </div>
          <ul>
            <li v-for="item in newUsers">
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {Popup, Picker, Button, Checklist} from 'mint-ui';
  export default {
    name: 'head',
    data () {
      return {
        fixed: true,
        popupScreen: false,
        popupVisible: false,
        pro: "",
        city: "",
        areaList: {
          "上海": ["上海"],
          "北京": ["北京"],
          "广东": ["广州", "深圳"],
          "江苏": ["徐州", "南京"],
          "福建": ["福州"]
        },
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        seekList:false,
        seekLately: [
          {link:'#',text:'白卡纸白卡纸白卡纸白卡纸'},
          {link:'#',text:'牛皮纸'},
          {link:'#',text:'白纸'},
          {link:'#',text:'黑纸'},
          {link:'#',text:'红纸'}
        ],
        recentSearch:true,
        searchResult:false,
        searchValue:'',
        searchList: [
            { link:'1', name: 'Bruce' },
            { link:'2', name: 'Chuck' },
            { link:'3', name: 'Jackie' },
            { link:'4', name: '赵' }
          ],
        value:[]
      }
    },
    computed: {
      newUsers: function () {
        if(this.searchValue == ""){
          this.recentSearch = true;
          this.searchResult = false
        }else {
          this.recentSearch = false;
          this.searchResult = true;
          var that = this;
          return that.searchList.filter(function (user) {
            return user.name.toLowerCase().indexOf(that.searchValue.toLowerCase()) !== -1;
          })
        }
      }
    },
    created: function () {
      this.init();
    },
    methods: {
      init(){
        this.slots[0].values = Object.keys(this.areaList);
        this.slots[2].values = Object.values(this.areaList)[0];
      },
      screen(){
        this.popupScreen = true;
      },
      site(){
        this.popupVisible = true;
      },
      confirmScreen(){
          alert(this.value)
      },
      cancelScreen(){
          this.popupScreen = false;
          this.value.splice(0,this.value)
      },
      onValuesChange(picker, values) {
          for(var key in this.areaList){
              if(values[0] === key){
                this.slots[2].values = this.areaList[key]
              }
          }
        this.pro = values[0];
        this.city = values[1];
      },
      siteHide(){
        this.popupVisible = false
      },
      siteConfirm(){
        alert(this.pro + '/' + this.city)
        this.popupVisible = false
      },
      seekBtn(){
          this.seekList = true;
          $("#seekVue").focus()
      },
      callOff(){
        this.seekList = false;
        this.recentSearch = true;
        this.searchResult = false;
        this.searchValue = "";
      }
    }
  }
</script>


<style lang="stylus">
  .head {
    padding: 10px 15px;
    background: #fff;
    height: 50px;
    .head-top{
      input {
        height: 30px;
        border: 1px solid #ddd;
        border-radius 3px;
        float: left;
      }
      i {
        float: right;
      }
    }
    .seekList{
      position : fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height : 100%;
      overflow: hidden;
      z-index : 999;
      background : #f2f2f2;
      .seekTop{
        height : 50px;
        background : #fff;
        padding : 10px 15px;
        .ibz-ico1{
          background : url("../assets/image/ibz1.png") no-repeat 0px center;
          background-size: 15px;
        }
        input.searchValue{
          height: 30px;
          border: 1px solid #ddd;
          border-radius 3px;
          float: left;
          padding-left:20px;
          background: #fff url("../assets/image/ibz9.png") no-repeat 6px content !important;
          background-size: 14px;
        }
      }
      .seekLatelyOul li{
        margin : 5px 0;
        a{
          display : block;
          width: 100%;
          height: 30px;
          background : #fff;
          border: 1px solid #ddd;
          color: #333;
          text-align: center;
          line-height: 30px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding : 0 5px;
        }
      }
      .seekContent ul{
        position: absolute;
        top:95px;
        left:0;
        right: 0;
        bottom:0;
        overflow-y: auto;
        li{
          padding: 0 15px;
          background: #fff;
          a{
            display: block;
            height: 50px;
            line-height: 50px;
          }
        }
      }
    }

    .field{
      height: 48px;
      line-height: 48px;
      padding: 0 5px;
      span{
        width: 70%;
        text-align: right;
        border: 0px;
        height: 47px;
        line-height: 47px;
      }
    }
    .detailsTitle{
      height: 40px;
      line-height: 40px;
      span{
        font-size: 1.5rem;
        color: #282828;
      }
    }
  }
</style>
