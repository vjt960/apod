<template>
	<div id="home">
		<h1>NASA's Astronomy Picture of the Day</h1>
		<iframe
			v-if="this.mediaType === 'video'"
			type="text/css"
			height="500"
			width="720"
			:title="this.title"
			:src="this.apod"
		></iframe>
		<img v-else class="apod" :alt="this.title" :src="this.apod" />
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
	h1 {
		text-align: center;
	}
</style>