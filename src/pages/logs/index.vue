<template lang="pug">
  div
    ul.container.log-list
      li.log-item(v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item")
        card(:text="(index + 1) + ' . ' + log")
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style scoped lang="stylus">
.log-list
  display flex
  flex-direction column
  padding 40rpx

.log-item
  margin 10rpx
</style>
