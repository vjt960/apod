<template>
	<div id="app">
		<header>
			<h1>NASA's Astronomy Picture of the Day</h1>
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

<style>
	html {
		overflow: hidden;
		height: 100%;
	}

	body {
		height: 100%;
		overflow: auto;
		overflow-y: scroll;
		margin: 0;
		padding: 0;
		background: url("./assets/nasa.png");
		background-size: cover;
		background-repeat: no-repeat;
	}

	header {
		height: 10vh;
		width: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.75) 35%, rgba(0, 0, 0, 0.15) 75%),
			url("./assets/hex-dark.png");
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/* position: absolute; */
		opacity: 0.95;
		padding: 0 1%;
		color: rgb(255, 255, 255);
	}

	h1 {
		font-size: 1.5em;
		margin: 0;
	}

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

	a {
		color: hsl(0, 0%, 100%);
		background-color: transparent;
		text-decoration: none;
		padding: 10px 25px 10px 25px;
		font-family: "Orbitron", sans-serif;
	}

	a:hover {
		color: rgba(255, 255, 255, 0.9);
		background-color: rgba(0, 0, 0, 0.55);
		transition: background-color 0.3s;
	}

	a.router-link-exact-active {
		color: rgba(255, 255, 255, 0.9);
		background-color: rgba(0, 0, 0, 0.55);
	}
</style>
