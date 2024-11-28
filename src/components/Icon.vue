<script setup lang="ts">
	const props = defineProps<{
		icon: string;
		size: number;
	}>();

	const iconStyle = {
		width: `${props.size}px`,
		height: `${props.size}px`,
		backgroundColor: 'currentColor',
		mask: `url('/icons/${props.icon}.svg') no-repeat center`,
		WebkitMask: `url('/icons/${props.icon}.svg') no-repeat center`,
	};
</script>

<template>
	<div :style="iconStyle"></div>
</template>

<style scoped>
	div {
		display: inline-block;
	}
</style>
