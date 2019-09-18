<template>
	<div id="app">
		<header>
			<nav>
				<ul>
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li>
						<router-link to="/Calendar">APOD Monthly</router-link>
					</li>
				</ul>
			</nav>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>

<style scoped>
	nav {
		height: auto;
		width: auto;
		margin: 0;
		padding: 0;
		display: flex;
	}

	ul {
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		list-style: none;
		padding: 0;
	}

	li {
		margin: 5px;
		font-size: 1.25em;
	}
</style>
