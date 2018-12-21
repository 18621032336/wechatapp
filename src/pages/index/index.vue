<template lang="pug">
  div.container(@click="clickHandle('test click', $event)")
    div.userinfo(@click="bindViewTap")
      i-avatar(v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" size="large")
      //- img.userinfo-avatar(v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover")
      div.userinfo-nickname
        card(:text="userInfo.nickName")

    div.usermotto
      div.user-motto
        card(:text="motto")

    form.form-container
      input.form-control(type="text" v-model="motto" placeholder="v-model")
      input.form-control(type="text" v-model.lazy="motto" placeholder="v-model.lazy")
    a.counter(href="/pages/counter/main") 去往Vuex示例页面
    i-cell-group.group
      i-cell(title="去往Vuex示例页面" is-link url="/pages/counter/main")
    div(v-for="(item, index) in list" :key="index") {{item.name}}
</template>

<script>
import card from '@/components/card';
import { message } from '@/utils/toast';
import { post, get } from '@/utils/request';

export default {
  data() {
    return {
      motto: 'Hello World',
      userInfo: {},
      list: [],
    };
  },

  components: {
    card,
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
            },
          });
        },
      });
    },
    clickHandle(msg, ev) {
      message('clickHandle:', msg, ev);
    },
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
  async onShow() {
    message(post.toString());

    // 获取数据
    const res = await get('gb/products');
    this.list = res.results;
  },
};
</script>

<style scoped lang="stylus">
.userinfo
  display flex
  flex-direction column
  align-items center
.userinfo-avatar
  width 128rpx
  height 128rpx
  margin 20rpx
  border-radius 50%
.userinfo-nickname
  color #aaa
.usermotto
  margin-top 150px
.form-control
  display block
  padding 0 12px
  margin-bottom 5px
  border 1px solid #ccc
.counter
  display inline-block
  margin 10px auto
  padding 5px 10px
  color blue
  border 1px solid blue
.group
  width 100%
</style>
