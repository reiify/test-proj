<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Categories } from '@/interface/interface';

	const categories: Categories[] = [
		{
			id: 1,
			icon: '/icons/category-1.svg',
			title: 'Кружки',
		},
		{
			id: 2,
			icon: '/icons/category-2.svg',
			title: 'Термосы',
		},
		{
			id: 3,
			icon: '/icons/category-3.svg',
			title: 'Аксессуары',
		},
		{
			id: 4,
			icon: '/icons/category-4.svg',
			title: 'Канцелярия',
		},
		{
			id: 5,
			icon: '/icons/category-5.svg',
			title: 'Флеш-карты',
		},
		{
			id: 6,
			icon: '/icons/category-6.svg',
			title: 'HDD',
		},
		{
			id: 7,
			icon: '/icons/category-7.svg',
			title: 'SSD',
		},
		{
			id: 8,
			icon: '/icons/category-8.svg',
			title: 'Текстиль',
		},
		{
			id: 9,
			icon: '/icons/category-9.svg',
			title: 'Упаковка',
		},
		{
			id: 10,
			icon: '/icons/category-10.svg',
			title: 'Xiaomi',
		},
	];
</script>

<template>
	<section class="categories">
		<div class="categories-top">
			<h2 class="categories-top_title">Основные категории</h2>
			<button class="categories-top_btn">
				<Icon
					icon="arrow-right"
					:size="20"
				/>
			</button>
		</div>

		<div class="categories-content">
			<div
				class="categories-content-item"
				v-for="item in categories"
				:key="item.id"
			>
				<div class="categories-content-item_img">
					<img
						:src="item.icon"
						alt="category icon"
					/>
				</div>
				<h3 class="categories-content-item_title">{{ item.title }}</h3>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.categories {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin-top: 30px;
		padding: 10px;
		width: 100%;

		@media (min-width: 768px) {
			gap: 64px;
			margin: 80px auto auto;
			padding: 0;
			max-width: 700px;
		}

		@media (min-width: 1366px) {
			max-width: 960px;
		}

		&-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

			@media (min-width: 768px) {
				justify-content: flex-start;
				gap: 28px;
			}

			&_btn {
				padding: 0;
				width: 40px;
				height: 40px;
				color: var(--secondary);
			}
		}

		&-content {
			display: flex;
			gap: 24px;
			margin: -10px;
			padding: 10px;
			overflow-x: auto;

			@media (min-width: 768px) {
				flex-wrap: wrap;
				gap: 50px 55px;
				margin: 0;
				padding: 0;
			}

			@media (min-width: 1366px) {
				gap: 50px 96px;
			}

			&-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20px;

				@media (min-width: 1366px) {
					&:nth-child(6) {
						margin-left: auto;
					}
				}

				&_img {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 21px;
					background-color: var(--neutral);
					aspect-ratio: 1/1;
					width: 75px;

					@media (min-width: 768px) {
						width: 96px;
					}

					img {
						aspect-ratio: 1/1;
						width: 44px;

						@media (min-width: 768px) {
							width: 52px;
						}
					}
				}

				&_title {
					text-align: center;
				}
			}
		}
	}
</style>
