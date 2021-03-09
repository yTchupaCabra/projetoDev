<template>
	<v-card class="mx-auto" max-width="500">
		<v-card-title class="title font-weight-regular justify-space-between">
			<span>Quesão Nº{{ step }}</span>
			<v-avatar
				color="primary lighten-2"
				class="subheading white--text"
				size="24"
				v-text="step"
			></v-avatar>
		</v-card-title>

		<v-window v-model="step">
			<v-window-item v-for="n in questions.length" :key="n">
				<Card />
			</v-window-item>
			<v-window-item :value="1">
				<v-card-text>
					<v-text-field
						label="Email"
						value="john@vuetifyjs.com"
					></v-text-field>
					<span class="caption grey--text text--darken-1">
						This is the email you will use to login to your Vuetify
						account
					</span>
				</v-card-text>
			</v-window-item>
		</v-window>

		<v-divider></v-divider>

		<v-card-actions>
			<v-btn v-if="step !== 1" text @click="step--"> Back </v-btn>
			<v-spacer></v-spacer>
			<v-btn v-if="step !== 3" color="primary" depressed @click="step++">
				Próxima
			</v-btn>
			<v-btn v-else color="primary" depressed @click="step++">
				Confirmar
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
import Card from "@/components/quiz/Card.vue";
export default {
	props: {
		questions: {
			type: Array,
		},
	},
	components: {
		Card,
	},
	data(){
		return{
		step: 3
		}
	},
	created(){
		console.log(this.questions)
	}
};
</script>
<style>
</style>