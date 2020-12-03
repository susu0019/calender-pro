<template>
  <div class="container">
    <ConsCard 
      :name="YearData.name"
      :allIndex="YearData.all"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import  getData  from '@/services'
export default {
  name: 'Year',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      YearData: computed(() => state.year)
    }
  }
}
</script>
