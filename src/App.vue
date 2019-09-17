<template>
	<div id="app">
		<h1 @click="clickFn">NASA's Astronomy Picture of the Day</h1>
		<p>{{this.timesClicked}}</p>
		<img v-if="this.mediaType === 'image'" class="apod" :alt="this.title" :src="this.apod" />
		<iframe v-else type="text/css" height="500" width="720" :title="this.title" :src="this.apod"></iframe>
		<p class="apod-description">{{this.desc}}</p>
	</div>
</template>

<script>
	import { getAPOD } from "./utils/apiCalls";

	export default {
		name: "app",
		data() {
			return {
				apod: "",
				title: "",
				desc: "",
				mediaType: ""
			};
		},
		async mounted() {
			const data = await getAPOD();
			this.apod = data.url;
			this.desc = data.explanation;
			this.title = data.title;
			this.medaType = data.media_type;
		},
		methods: {
			async changeApodByDate(date) {
				const data = await getAPOD(date);
				this.apod = data.url;
				this.desc = data.explanation;
				this.title = data.title;
			}
		}
	};
</script>

<style scoped>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1:hover {
		cursor: pointer;
		color: red;
	}
</style>
