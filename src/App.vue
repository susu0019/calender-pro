<template>
  <div id="app">
    <my-header>星空物语</my-header>
    <nav-bar />
    <!-- 缓存tab  不必重新加载 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <tab />
  </div>
  
</template>
<script>
import MyHeader from './components/MyHeader/myHeader'
import Tab from '@/components/Tab'
import NavBar from '@/components/NavBar'
import { watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar
  },
  setup () {
    const store = useStore()
    const state = store.state
    const router = useRouter()
    //初始化
    router.push('/')
    store.commit('setField', 'today')

    watch(()=>{
      return router.currentRoute.value.name
    },(value) =>{
      // 此时的value值 是上一步return出来的值 
      // value是接口要发送的type类型 每次点击需要存储当前的类型type 下次点击tab时 可以直接拿到
      store.commit('setField', value)
    })
  }
}
</script>

<style lang="scss">
</style>
