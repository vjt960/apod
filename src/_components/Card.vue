<template functional>
	<article>
		<iframe class="calendar-vid" v-if="props.media_type === 'video'" :src="props.apod"></iframe>
		<img class="calendar-img" v-else :src="props.apod" :alt="props.title" />
	</article>
</template> 

<script>
	export default {
		name: "Card",
		props: {
			apod: {
				required: true,
				type: String
			},
			media_type: {
				required: true,
				type: String
			},
			title: {
				required: true,
				type: String
			}
		}
	};
</script> 

<style scoped>
	.article {
		height: 275px;
		width: 200px;
	}

	iframe,
	img {
		object-fit: cover;
		height: 255px;
		width: 100%;
	}
</style>