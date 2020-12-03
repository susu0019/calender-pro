<template>
  <div class="container">
    <ConsCard 
      :name="WeekData.name"
      :allIndex="WeekData.all"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import  getData  from '@/services'
export default {
  name: 'Week',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      WeekData: computed(() => state.week)
    }
  }
}
</script>