<template>
  <div class="relevanceHead">
    <div class="mtb20 tac">
      <img :src="ico1" alt="关联爱包装网账号" width="211">
    </div>
    <div class="relevanceIco">
      <p>1、您正在使用爱包装网，请先关联爱包装网账号。</p>
      <p>2、爱包装网承诺您的手机号码及账号隐私安全。关联后您可快捷登录爱包装网网站，并可同步信息。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'relevanceHead',
    data () {
      return {
        ico1: require('../../assets/image/ibz12.png'),
      }
    },
    computed: {},
    methods: {}
  }
</script>


<style lang="stylus">
  .relevanceIco{
    background:#f3f3f3;
    padding: 10px;
    P{
      line-height: 18px;
      color: #666;
    }
  }
</style>
