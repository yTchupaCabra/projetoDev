<template>
	<v-app>
		<v-container fluid>
			<Layout />
			<!-- <v-main>
			</v-main> -->
		</v-container>
	</v-app>
</template>

<script>
import Layout from "@/components/layout/Layout.vue";
export default {
	components: {
		Layout,
	},
};
</script>
<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	color: #2e495e;
}
</style>
