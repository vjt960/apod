<template>
	<div id="calendar">
		<h1>Astronomy Pictures this Month</h1>
		<section>
			<Card
				v-for="(obj, index) in apods"
				:key="index"
				:apod="obj.url"
				:media_type="obj.media_type"
				:title="obj.title"
			></Card>
		</section>
	</div>
</template> 

<script>
	import { getMonthsAPOD } from "../utils/apiCalls";
	import Card from "./Card.vue";
	export default {
		name: "Calendar",
		components: { Card },
		data() {
			return {
				apods: []
			};
		},
		async mounted() {
			const data = await getMonthsAPOD();
			this.apods = data;
		}
	};
</script> 

<style scoped>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		margin: 1%;
	}
</style>