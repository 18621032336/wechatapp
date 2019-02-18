<template lang="pug">
  div.counter-warp
    p Vuex counter：{{ count }}
    p
      div(@click="increment")
        span.iconfont.icon-plus
      div(@click="decrement") -

    a.home(href="/pages/index/main") 去往首页
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    incremen () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="stylus">
.counter-warp
  text-align center
  margin-top 100px
.home
  display inline-block
  margin 100px auto
  padding 5px 10px
  color blue
  border 1px solid blue
</style>
