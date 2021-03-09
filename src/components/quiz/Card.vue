<template>
	<div>
		<v-card-text>
			{{ question[0] }}
		</v-card-text>
		<v-radio-group v-model="ex7" row>
			<v-radio :label="getResponse(1)" value="1"></v-radio>
			<v-radio :label="getResponse(2)" value="2"></v-radio>
			<v-radio :label="getResponse(3)" value="3"></v-radio>
			<v-radio :label="getResponse(4)" value="4"></v-radio>
		</v-radio-group>
	</div>
</template>
<script>
export default {
	props: {
		question: {
			type: Array,
		},
	},
	data() {
		return {};
	},
	methods: {
		getResponse(number) {
			return this.question[number];
		},
	},
};
</script>
<style>
</style>