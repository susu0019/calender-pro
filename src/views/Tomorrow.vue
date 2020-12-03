<template>
  <div class="container">
     <ConsCard 
      :name="TomorrowData.name"
      :allIndex="TomorrowData.all"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import  getData  from '@/services'
export default {
  name: 'Tomorrow',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      TomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>
