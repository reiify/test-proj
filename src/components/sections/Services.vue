<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Services } from '@/interface/interface';

	const services: Services[] = [
		{
			id: 1,
			icon: '/icons/laser.svg',
			title: 'Гравировка',
			description: 'Нанесем на изделия логотип, рисунок или надпись',
		},
		{
			id: 2,
			icon: '/icons/water.svg',
			title: 'Шелкография',
			description: 'Изображения высоко качества на любых материалах',
		},
		{
			id: 3,
			icon: '/icons/press.svg',
			title: 'Тиснение',
			description: 'Нанесения рельефного рисунка',
		},
		{
			id: 4,
			icon: '/icons/roller.svg',
			title: 'Тампопечать',
			description: 'Перенос изображения с помощью силиконового валика',
		},
	];
</script>

<template>
	<section class="services">
		<div class="services-top">
			<h2 class="servies-top_title">Популярные сервисы</h2>
			<button class="services-top_btn">
				<Icon
					icon="arrow-right"
					:size="20"
				/>
			</button>
		</div>

		<div class="services-content">
			<div
				v-for="item in services"
				:key="item.id"
				class="services-content-item"
			>
				<div class="services-content-item_card">
					<img
						:src="item.icon"
						alt="card icon"
						class="services-content-item_card-icon"
					/>
					<h3 class="services-content-item_card-title">{{ item.title }}</h3>
					<p class="services-content-item_card-description">{{ item.description }}</p>
				</div>
				<button class="services-content-item_btn">
					<span>Подробнее</span>
					<Icon
						icon="arrow-right"
						:size="16"
					/>
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.services {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: auto;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			gap: 64px;
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
			}
		}

		&-content {
			display: flex;
			flex-wrap: wrap;
			gap: 28px 0;

			@media (min-width: 1366px) {
				gap: 64px;
			}

			&-item {
				display: inherit;
				flex-direction: column;
				gap: 7px;
				width: 100%;
				max-width: 150px;

				@media (min-width: 768px) {
					gap: 40px;
					max-width: 175px;
				}

				@media (min-width: 1366px) {
					gap: 28px;
					max-width: 192px;
				}

				&_card {
					display: inherit;
					flex-direction: column;
					gap: 10px;

					&-icon {
						aspect-ratio: 1/1;
						width: 50px;
					}

					&-description {
						width: calc(100% - 10px);
						height: 54px;
						color: var(--muted);

						@media (min-width: 768px) {
							font-weight: 500;
							font-size: 12px;
							line-height: 18px;
						}

						@media (min-width: 1366px) {
							height: 60px;
						}
					}
				}

				&_btn {
					padding: 12px 24px;

					span {
						font-weight: 400;
						font-size: 12px;
						line-height: 16px;
					}

					img {
						width: 16px;
						height: 16px;
					}
				}
			}
		}
	}
</style>
