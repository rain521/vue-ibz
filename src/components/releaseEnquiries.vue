<template>
  <div class="releaseEnquiries">
    <div v-title>发布询盘</div>
    <div>
      <div class="container">
        <div class="detailsTitle"><span>采购信息</span></div>
      </div>
      <div class="ibz-background1">
        <div class="container">
          <div class="field borderB clearfix">
            <label class="fl">标题</label>
            <input class="fr" type="text" v-model="title" placeholder="请输入商品名称">
          </div>
          <div class="describe">
            <label>描述</label>
            <textarea placeholder="请描述商品的规格、工艺、尺寸、数量等要求..." rows="4" class="mint-field-core" v-model="describe"></textarea>
          </div>
          <div class="imgthumb">
            <label>商品图片</label>
            <div>
              <vue-core-image-upload
                :class="['btn', 'btn-primary']"
                :crop="true"
                :cropBtn="{ok:'确定','cancel':'取消'}"
                @imageuploaded="imageuploaded"
                :max-file-size="5242880"
                url="" >
              </vue-core-image-upload>
            </div>
            <ul class="oulThumb">
              <li class="thumbBtn">
                <i class="fa fa-camera-retro"></i>
                <span>添加图片</span>
              </li>
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
            <input class="fr" type="tel" v-model="phone" placeholder="请输入联系方式" maxlength="11">
          </div>
          <div class="field borderB clearfix">
            <label class="fl">报价截止日期</label>
            <input class="fr" type="date" v-model="expirationDate" placeholder="请输入报价截止日期">
          </div>
          <div class="field clearfix">
            <label class="fl">收货地址</label>
            <span class="fr" @click="site">{{ siteCotent }}<i class="fa fa-angle-right ml5 f14"></i></span>
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
          </div>
        </div>
      </div>
    </div>
    <app-foot coment="2"></app-foot>
  </div>
</template>


<script>
  import { Popup, Picker, Field } from 'mint-ui';
  import Foot from './foot.vue';
  import VueCoreImageUpload  from 'vue-core-image-upload';
  export default {
    name: 'releaseEnquiries',
    data () {
      return {
        title:'',
        describe:'',
        phone:'',
        expirationDate:'',
        imgthumb:['http://avatar.csdn.net/C/8/A/1_luckylqh.jpg'],
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        popupVisible: false,
        siteCotent:'请选择',
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
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init(){
        this.slots[0].values = Object.keys(this.areaList);
        this.slots[2].values = Object.values(this.areaList)[0];
//        $(".seekContentHeight").css('height', '300px')
//        var _seekContentHeight = document.getElementById("seekContentHeight");
//        console.log(_seekContentHeight.innerHTML)
      },
      site(){
        this.popupVisible = true;
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
        this.siteCotent = this.pro +' '+ this.city;
        this.popupVisible = false
      },
      imageuploaded(res) {
        console.log(res)
        if (res.errcode == 0) {
          this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
        }
      }
    },
    components: {
      'app-foot': Foot,
      'vue-core-image-upload': VueCoreImageUpload
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
</style>
