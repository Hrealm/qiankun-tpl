<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		class="el-menu-vertical-demo"
		default-active="1"
		text-color="#fff"
	>
		<el-menu-item index="1">
			<el-icon><icon-menu /></el-icon>
			<span>sub-vue</span>
		</el-menu-item>
		<el-menu-item index="2">
			<el-icon><document /></el-icon>
			<span>sub-react</span>
		</el-menu-item>
		<el-menu-item index="3">
			<el-icon><setting /></el-icon>
			<span>sub-other</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'
export default {
	name: 'AsideMenu',
	props: [],
  components: {
    Document,
    Setting,
    IconMenu,
  },
	setup() {
		const _state = reactive({})
		const refData = toRefs(_state)
		onBeforeMount(() => {})
		onMounted(() => {})
		return {
			...refData,
		}
	},
}
</script>
<style scoped lang='scss'>
.el-menu-vertical-demo{
  height: 100%;
}
</style>