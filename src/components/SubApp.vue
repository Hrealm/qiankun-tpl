<template>
  <div>
    <div id="sub-app"></div>
  </div>
</template>

<script>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
export default {
   name: '',
   props: [],
   setup() {
     const _state = reactive({})
     const refData = toRefs(_state);
     onBeforeMount(() => {
     })
     onMounted(() => {
     })
     return {
        ...refData,
      }
   }
}
</script>
<style scoped lang='scss'>
</style>