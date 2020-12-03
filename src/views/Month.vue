<template>
  <div class="container">
    <!-- 使用numbe人是为了将数字串不显示出来NaN -->
    <ConsCard 
      :name="MonthData.name"
      :allIndex="Number(MonthData.all)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import  getData  from '@/services'
export default {
  name: 'Month',
  setup () {
    const store = useStore()
    const state = store.state
    onMounted(() => {
      getData(store)
    })
    return {
      MonthData: computed(() => state.month)
    }
  }
}
</script>
