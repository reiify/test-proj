<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Shop } from '@/interface/interface';

	const shop: Shop[] = [
		{
			id: 1,
			img: '/shop/1.png',
			title: 'Кружка под сублимацию "Стандарт"',
			price: 'от 75₽',
		},
		{
			id: 2,
			img: '/shop/2.png',
			title: 'Эко-ручка',
			price: 'от 75₽',
		},
		{
			id: 3,
			img: '/shop/3_1.png',
			title: 'Чехол-крышка для телефона iPhone 8+',
		},
		{
			id: 4,
			img: 'shop/4.png',
			title: 'Флеш-карта "Элегант"',
			price: 'от 75₽',
		},
	];

	const props = defineProps<{
		addBtnText: string;
		showIcon: boolean;
	}>();
</script>

<template>
	<section class="popular">
		<h1 class="popular-title">Популярные и новые <strong class="accent-underline">товары</strong></h1>

		<div class="popular-items">
			<div
				class="popular-items-content"
				v-for="item in shop"
				:key="item.id"
			>
				<div class="popular-items_img">
					<img
						:src="item.img"
						:alt="item.title"
					/>
					<div
						class="popular-items_badge"
						v-if="item.price && props.showIcon"
					>
						<p class="p-sm">
							{{ item.price }}
						</p>
					</div>
				</div>
				<h3 class="popular-items_title">{{ item.title }}</h3>
				<button class="popular-items_btn">
					<span>{{ props.addBtnText }}</span>
					<Icon
						icon="plus"
						:size="16"
					/>
				</button>
			</div>
			<button
				class="nav-btn"
				:style="{ marginTop: '76px' }"
				v-if="props.showIcon"
			>
				<Icon
					icon="chevron-right"
					:size="20"
				/>
			</button>
		</div>

		<div class="separator" />
	</section>
</template>

<style lang="scss">
	.popular {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin-top: 30px;
		padding: 10px;
		width: 100%;

		@media (min-width: 768px) {
			gap: 70px;
			padding: 34px;
		}

		@media (min-width: 1366px) {
			margin: auto;
			margin-top: 130px;
			max-width: 1080px;
		}

		&-title {
			width: 100%;
			max-width: 300px;

			@media (min-width: 768px) {
				max-width: 430px;
			}

			@media (min-width: 1366px) {
				max-width: 480px;
			}
		}

		&-items {
			display: flex;
			gap: 30px;
			margin: -10px;
			padding: 10px;
			overflow-x: auto;

			@media (min-width: 768px) {
				gap: 28px;
				margin: -34px;
				padding: 34px;
			}

			@media (min-width: 1366px) {
				gap: 64px;
			}

			&-content {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			&_img {
				display: flex;
				position: relative;
				justify-content: center;
				align-items: center;
				border-radius: 24px;
				background-color: #f2f2f2;
				aspect-ratio: 1/1;
				width: 120px;

				@media (min-width: 768px) {
					width: 175px;
				}

				img {
					width: 70px;

					@media (min-width: 768px) {
						width: 100px;
					}
				}
			}

			&_badge {
				position: absolute;
				bottom: 14px;
				left: 14px;
				border-radius: 14px;
				background-color: var(--primary);
				padding: 0 12px;
				height: 20px;
				color: #fff;
			}

			&_title {
				width: 100%;
				max-width: 120px;
				height: 54px;

				@media (min-width: 768px) {
					max-width: 175px;
					height: 40px;
				}

				@media (min-width: 1366px) {
					max-width: 192px;
				}
			}

			&_btn {
				font-weight: 400;
				font-size: 12px;
				line-height: 16px;
			}
		}
	}
</style>
