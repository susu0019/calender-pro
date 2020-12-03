<template>
  <div class="nav-bar"
    v-nav-current="{
      className: 'nav-item',
      activeClass: 'nav-current',
      curIdx
    }"
    @click="navClick($event)"
  >
      <div class="scroll-warpper"> 
          <div class="nav-wrapper" :style="`width: ${navData.length * .8}rem`">
              <nav-item 
                v-for="(item,index) of navData" 
                :key='index'
                :item='item'
                :index="index"
              >
              </nav-item>
          </div>
      </div>
  </div>
</template>

<script>
import navData from '@/datas/nav'
import NavItem from './bar'
import { onMounted, ref } from 'vue'
import { navCurrent } from '@/directives'
import { useStore } from 'vuex'

export default {
    name: 'NavBar',
    components: {
        NavItem
    },
    directives: {
      navCurrent
    },
    setup () {
        const curIdx = ref(0)
        const store = useStore()
        const navClick = (e) =>{
          if(e.target.className=='nav-item'){
            curIdx.value = e.target.dataset.index
            const cosName = e.target.innerText
            store.commit('setConsName', cosName)
            console.log(store.state.consName);
          }
        }
        return {
            navData,
            curIdx,
            navClick
        }
    }

}
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    .scroll-wrapper {
      height: .46rem;
      overflow-x: auto;

      .nav-wrapper {
        display: flex;
        flex-direction: row;
        height: .42rem; 
      }
    }
  }
</style>