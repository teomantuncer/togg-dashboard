<template>
	<div class="home">
		<driving-panel class="panel" />
		<navigation-panel class="panel" />
		<selectable-panel />
	</div>
</template>
<script>
import NavigationPanel from '@/components/NavigationPanel.vue'
import DrivingPanel from '@/components/DrivingPanel.vue'
import SelectablePanel from '@/components/SelectablePanel.vue'

export default {
	name: 'HomeView',
	components: {
		NavigationPanel,
		DrivingPanel,
		SelectablePanel
	}
}
</script>
<style lang="stylus">
@import url('../assets/vars.css')
.home
	display grid
	grid-template-columns 3fr 5fr
	flex 1
	row-gap 1rem
	column-gap 1rem
	grid-template-rows 1fr 1fr 1fr 2fr
.panel
	background-color var(--color-box-bg)
	margin 0
	padding 0
	border-radius 1rem
	overflow hidden
.navigation-panel
	grid-column-start 2
	grid-column-end 3
	grid-row-start 1
	grid-row-end 4
.driving-panel
	grid-row-start 1
	grid-row-end 6
.selectable-panel
	grid-column-start 2
	grid-column-end 3
	grid-row-start 4
	grid-row-end 6
</style>
