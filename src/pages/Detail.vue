<template>
	<ul>
		<li>訊息編號: {{ id }}</li>
		<li>訊息標題: {{ title }}</li>
	</ul>
</template>

<script>
	export default {
		name: 'Detail',
		props: ['id', 'title'],
	};
</script>
