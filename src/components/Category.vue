<template>
		<b-list-group-item v-if="item.type==='group'">{{item.group.children[1].name}}</b-list-group-item>
</template>
<script>
	

	export default{
		name : 'Category',
		props : ['item']
	}
</script>
<style>
</style>