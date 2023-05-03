<template>
	<div id="app">
		<Banner />
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!-- <a
							class="list-group-item active"
							href="./about.html"
							>About</a
						>
						<a
							class="list-group-item"
							href="./home.html"
							>Home</a
						> -->

					<!-- Vue中借助router-link標籤實現路由的切換 -->
					<router-link
						class="list-group-item"
						active-class="active"
						to="/about">
						About
					</router-link>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home">
						Home
					</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!-- 此處到底要展示什麼組件，必須依據使用者具體是點擊哪個導航 -->
						<!-- 指定組件的呈現位置 -->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from './components/Banner.vue';
	export default {
		name: 'App',
		components: { Banner },
	};
</script>

<style></style>
