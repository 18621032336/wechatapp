<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }
}
</script>

<style lang="stylus">
@import 'styles/base.styl'
@import 'styles/iconfont.styl'
@import 'styles/variable.styl'
.container
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  padding 200rpx 0
  box-sizing border-box
  color $main
/* this rule will be remove */
*
  transition width 2s
  -moz-transition width 2s
  -webkit-transition width 2s
  -o-transition width 2s
</style>
