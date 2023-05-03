<template>
	<div>
		<ul>
			<li
				v-for="msg in messageList"
				:key="msg.id">
				<router-link
					:to="{
						name: 'detail', // 路由名稱
						// path: 'detail',  // 路由路徑
						query: { id: msg.id, title: msg.title },
					}">
					{{ msg.title }}
				</router-link>
				&nbsp;&nbsp;
				<button @click="pushShow(msg)">push查看</button>
				<button @click="replaceShow(msg)">replace查看</button>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'Message',
		data() {
			return {
				messageList: [
					{ id: '001', title: 'message001' },
					{ id: '002', title: 'message002' },
					{ id: '003', title: 'message003' },
				],
			};
		},
		methods: {
			pushShow(msg) {
				this.$router.push({
					name: 'detail',
					query: { id: msg.id, title: msg.title },
				});
			},
			replaceShow(msg) {
				this.$router.replace({
					name: 'detail',
					query: { id: msg.id, title: msg.title },
				});
			},
		},
	};
</script>

<style></style>
