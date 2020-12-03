<template>
  <div class="container">
    <ConsCard 
      :name="todayData.name"
      :allIndex="todayData.all"
    />
  </div>
</template>
<script>
// @ is an alias to /src
// import ConsCard from '@/components/common/Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import  getData  from '@/services'
export default {
  name: 'Today',
  setup () {
    const store = useStore(),
    state=store.state
    onMounted(() => {
      getData(store)
      
    })
    return {
      todayData: computed(() => state.today)
    }
  }
}
</script>
