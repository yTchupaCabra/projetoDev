<template>
	<div>
		<v-card flat>
			<v-card flat="flat" color="grey lighten-4">
				<v-container fluid="fluid" grid-list-xl="grid-list-xl">
					<v-layout row="row" wrap="wrap">
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="ID"
								v-model="fiscalEstablishment.id"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="Estabelecimento Fiscal"
								v-model="fiscalEstablishment.fiscalEstablishmentId"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="Aplicação"
								v-model="fiscalEstablishment.application"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="Banco Padrão"
								v-model="fiscalEstablishment.bankDefault"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="Companhia"
								v-model="fiscalEstablishment.company"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="Cidade"
								v-model="fiscalEstablishment.city"
							></v-text-field>
						</v-flex>
						<v-flex sm3="sm3">
							<v-text-field
								readonly
								label="CEP"
								v-model="fiscalEstablishment.postalCode"
							></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
		</v-card>
	</div>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				fiscalEstablishment: [],
			};
		},
		created() {
			this.fiscalEstablishment = this.item;
		},
	};
</script>
<style></style>
