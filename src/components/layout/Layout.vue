<template>
	<div>
		<AppBar />
		<NavigationDrawer />
	</div>
</template>
<script>
	import AppBar from "@/components/layout/AppBar.vue";
	import NavigationDrawer from "@/components/layout/NavigationDrawer.vue";
	export default {
		components: {
			AppBar,
			NavigationDrawer
		},
	};
</script>
<style></style>
