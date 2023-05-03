<template>
	<div>
		<h2>Home組件內容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/news">
						News
					</router-link>
				</li>
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/message">
						Message
					</router-link>
				</li>
			</ul>
			<!-- include裡面要寫組件名稱 -->
			<keep-alive :include="['News']">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
	};
</script>
