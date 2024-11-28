<script setup lang="ts">
	const props = defineProps({
		dots: {
			type: String,
			default: 'three',
			validator: (value: string) => ['two', 'three'].includes(value),
		},
		contentClass: {
			type: String,
			default: '',
		},
	});
</script>

<template>
	<div class="window">
		<div class="window-header">
			<div class="window-header_dots">
				<span class="dot dot-red" />
				<span class="dot dot-yellow" />
				<span
					class="dot dot-green"
					v-if="props.dots == 'three'"
				/>
			</div>
		</div>

		<div :class="props.contentClass">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.window {
		box-shadow: 0px 10px 40px 0px #00000026;
		border-radius: 7px;
		background: var(--white);
		width: 100%;

		&-header {
			box-shadow: 0px 2px 5px 0px #00000026;
			border-radius: 7px 7px 0 0;
			background: linear-gradient(180deg, #4d4d4d 0%, #262626 100%);
			padding: 8px;
			width: 100%;

			&_dots {
				display: flex;
				gap: 5px;
			}
		}
	}

	.dot {
		border-radius: 100%;
		aspect-ratio: 1/1;
		width: 8px;

		&-red {
			background: #ff2f54;
		}
		&-yellow {
			background: #ffa630;
		}
		&-green {
			background: var(--primary);
		}
	}
</style>
