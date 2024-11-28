<script setup lang="ts">
	import Icon from '@/components/Icon.vue';

	const props = defineProps<{
		isDisabled: boolean;
		openConstructor: string;
	}>();
</script>

<template>
	<section class="designer">
		<img
			src="/icons/union.svg"
			alt="union"
			class="designer-union"
		/>
		<div class="designer-images">
			<picture class="designer-images_window">
				<source
					media="(min-width: 768px)"
					srcset="/design/dsgn-window.png"
				/>
				<img
					src="/design/dsgn-window_sm.png"
					alt="window"
				/>
			</picture>
			<img
				src="/design/dsgn-tools.png"
				alt="tools"
				class="designer-images_tools"
			/>
		</div>

		<div class="designer-content">
			<picture class="designer-content_mask">
				<source
					media="(min-width: 1920px)"
					srcset="/design/mask-lg.png"
				/>
				<source
					media="(min-width: 1366px)"
					srcset="/design/mask.png"
				/>
				<img
					src="/design/mask-sm.png"
					alt="background image"
				/>
			</picture>
			<div class="designer-content_wrapper">
				<h1 class="designer-content_title">
					Разместите <strong class="primary-underline">свое</strong> изображение как хотите
				</h1>
				<p class="designer-content_description">
					В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности.
				</p>
				<button
					class="designer-content_button"
					:disabled="props.isDisabled"
				>
					{{ props.openConstructor }}
					<Icon
						icon="edit"
						:size="16"
					/>
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.designer {
		display: flex;
		position: relative;
		flex-direction: column;
		margin-top: 180px;
		background-color: var(--primary);

		@media (min-width: 1366px) {
			flex-direction: row;
			margin-top: 70px;
			margin-left: auto;
			border-radius: 28px 0 0 0;
			width: 908px;
			height: 384px;
		}

		@media (min-width: 1920px) {
			width: 1184px;
		}

		&-union {
			display: none;
			position: absolute;
			left: -30%;
			margin-top: -20px;

			@media (min-width: 1366px) {
				display: block;
			}

			@media (min-width: 1920px) {
				left: -22%;
			}
		}

		&-images {
			position: relative;
			z-index: 1;
			margin-top: -50%;

			@media (min-width: 768px) {
				margin-top: -25%;
			}

			@media (min-width: 1366px) {
				margin-top: 110px;
				margin-left: -32%;
			}

			@media (min-width: 1920px) {
				margin-left: -24%;
			}

			&_window {
				display: block;
			}

			&_tools {
				position: absolute;
				top: 65px;
				left: 50px;
				z-index: 2;

				@media (min-width: 768px) {
					top: 24px;
					right: 108px;
					left: auto;
				}

				@media (min-width: 1366px) {
					top: 74px;
					right: auto;
					left: 50px;
				}
			}
		}

		&-content {
			display: flex;
			gap: 98px;
			margin-top: 96px;
			margin-bottom: 50px;
			padding: 10px;
			width: 100%;
			max-width: 300px;

			@media (min-width: 768px) {
				margin-top: 50px;
				padding: 8px;
				max-width: 700px;
				overflow: hidden;
			}

			@media (min-width: 1366px) {
				gap: 50px;
				padding: 0;
				max-width: 908px;
			}

			@media (min-width: 1920px) {
				max-width: 1184px;
			}

			&_wrapper {
				display: flex;
				flex-direction: column;
				gap: 20px;
			}

			&_mask {
				display: none;

				img {
					width: 278px;
					height: 282px;
					object-fit: contain;

					@media (min-width: 1920px) {
						width: 502px;
					}
				}

				@media (min-width: 768px) {
					display: block;
				}

				@media (min-width: 1366px) {
					order: 1;
				}
			}

			&_title {
				width: 100%;
				color: #fff;

				@media (min-width: 768px) {
					width: 308px;
				}
			}

			&_description {
				margin-top: 8px;
				width: 300px;
				color: var(--secondary);

				@media (min-width: 768px) {
					margin-top: 16px;
					width: 352px;
				}
			}
		}
	}
</style>
