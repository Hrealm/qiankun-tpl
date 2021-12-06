<template>
	<el-menu
		active-text-color="#ffd04b"
		background-color="#545c64"
		class="el-menu-vertical-demo"
		default-active="/"
		text-color="#fff"
    router
	>
		<el-menu-item index="/">
			<el-icon><icon-menu /></el-icon>
			<span>HOME</span>
		</el-menu-item>
		<el-menu-item index="/sub-vue">
			<el-icon><icon-menu /></el-icon>
			<span>sub-vue</span>
		</el-menu-item>
		<el-menu-item index="/sub-react">
			<el-icon><document /></el-icon>
			<span>sub-react</span>
		</el-menu-item>
		<el-menu-item index="/sub-other">
			<el-icon><setting /></el-icon>
			<span>sub-other</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons'
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
.el-menu-vertical-demo {
	height: 100%;
}
</style>