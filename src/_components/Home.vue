<template>
	<div id="home">
		<img
			v-if="this.isLoading === true"
			class="loading-gif"
			src="../assets/loading-hex.gif"
			alt="loading-gif"
		/>
		<div v-else class="image-container">
			<iframe
				v-if="this.mediaType === 'video'"
				class="media apod"
				type="text/css"
				height="500"
				width="720"
				:title="this.title"
				:src="this.apod"
			></iframe>
			<img v-else class="apod" :alt="this.title" :src="this.apod" />
		</div>
		<p class="apod-title">{{this.title}}</p>
		<p class="apod-description">{{this.desc}}</p>
	</div>
</template> 

<script>
	import { getAPOD } from "../utils/apiCalls";
	export default {
		name: "app",
		data() {
			return {
				apod: "",
				title: "",
				desc: "",
				mediaType: "",
				error: "",
				isLoading: false
			};
		},
		async mounted() {
			await this.loadApod();
		},
		methods: {
			async loadApod() {
				this.isLoading = true;
				try {
					const data = await getAPOD();
					this.apod = data.url;
					this.desc = data.explanation;
					this.title = data.title;
					this.medaType = data.media_type;
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
	#home {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.loading-gif {
		margin-top: 20%;
	}

	.apod-title {
		font-size: 1.45em;
	}

	.apod-description {
		font-size: 1.2em;
	}

	p {
		color: white;
		font-family: "Orbitron", sans-serif;
		width: 65%;
	}
</style>