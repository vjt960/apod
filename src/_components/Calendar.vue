<template>
	<div id="calendar">
		<h2 class="calendar-header">Astronomy Pictures this Month</h2>
		<div class="loading-container">
			<img
				v-if="this.isLoading === true"
				class="loading-gif"
				src="../assets/loading-hex.gif"
				alt="loading-gif"
			/>
		</div>
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
				apods: [],
				isLoading: false,
				error: ""
			};
		},
		async mounted() {
			await this.loadMonthlyApods();
		},
		methods: {
			async loadMonthlyApods() {
				this.isLoading = true;
				try {
					const data = await getMonthsAPOD();
					this.apods = data;
					this.error = "";
				} catch (error) {
					this.error = error.message;
				}
				this.isLoading = false;
			}
		}
	};
</script> 

<style scoped>
	.calendar-header {
		color: white;
		font-family: "Orbitron", sans-serif;
		/* margin-top: 10%; */
	}

	h2 {
		text-align: center;
	}

	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		margin: 1%;
	}

	.loading-container {
		margin-top: 10%;
		display: flex;
		justify-content: center;
	}
</style>