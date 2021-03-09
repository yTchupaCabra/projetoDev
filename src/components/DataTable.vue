<template>
	<v-card>
		<v-card-title>
			Lojas Cadastradas
			<v-spacer></v-spacer>
			<v-text-field v-model="search" label="Search"></v-text-field>
		</v-card-title>
		<v-data-table
			:headers="headerTable"
			:items="fiscalEstablishment"
			:expanded.sync="expanded"
			item-key="fiscalEstablishmentId"
			:search="search"
			show-expand
			class="elevation-2"
		>
			<template v-slot:no-data>
				<v-alert :value="true"> Sorry, nothing to display here! </v-alert>
			</template>
			<template v-slot:no-results>
				<v-alert :value="true" color="error" icon="warning">
					Your search for '{{ search }}' found no results.
				</v-alert>
			</template>
			<template v-slot:items="props">
				<td class="text-xs-right">{{ props.item.city }}</td>
				<td class="text-xs-right">{{ props.item.company }}</td>
				<td class="text-xs-right">{{ props.item.application }}</td>
			</template>
			<template v-slot:expanded-item="{ headers, item }">
				<td :colspan="headers.length">
					<Card :item="item" />
				</td>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
				<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
	import Card from "@/components/Card.vue";
	export default {
		components: {
			Card,
		},
		data() {
			return {
				search: "",
				expanded: [],
				headerTable: [
					{
						text: "Loja",
						align: "start",
						sortable: "true",
						value: "fiscalEstablishmentId",
					},
					{ text: "Cidade", value: "city" },
					{ text: "Companhia", value: "company" },
					{ text: "APP", value: "application" },
					{ text: "Actions", value: "actions", sortable: false },
				],
				expandedTable: [],
			};
		},
		computed: {
			fiscalEstablishment: {
				get() {
					return this.$store.state.fiscalEstablishment
				}
			}
		},
		methods: {
			editItem(item) {
				this.$store.dispatch("openEditDialog", item);
			},
			deleteItem(item) {
				this.$store.dispatch("openDeleteDialog", item);
			},
		},
		created() {
			this.$http.get("Gui/FindStablishment").then((res) => {
				this.fiscalEstablishment = res.data;
			});
		},
	};
</script>
<style></style>
