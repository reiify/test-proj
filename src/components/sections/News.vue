<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { News } from '@/interface/interface';

	const news: News[] = [
		{
			id: 1,
			title: 'Маски теперь в продаже',
			description:
				'Принимая во внимание показатели успешности, синтетическое тестирование способствует повышению качества анализа существующих паттернов поведения. Противоположная точка зрения подразумевает.',
			date: '02.10.2021',
		},
		{
			id: 2,
			title: 'Обновление сайта и новое позиционирование',
			description:
				'Мы вынуждены отталкиваться от того, что начало повседневной работы по формированию позиции требует от нас анализа направлений по формированию анализа прогрессивного развития.',
			date: '02.10.2021',
		},
	];
</script>

<template>
	<section class="news">
		<h1 class="news-title">Оставайтесь <strong class="accent-underline">в курсе событий</strong></h1>

		<div class="news_wrapper">
			<div
				class="news-content"
				v-for="item in news"
				:key="item.id"
			>
				<div class="separator" />
				<div class="news-content-item">
					<h3 class="news-content-item_title">{{ item.title }}</h3>
					<p class="news-content-item_description">{{ item.description }}</p>
				</div>
				<div class="news-content-date">
					<h3 class="news-content-date_date">{{ item.date }}</h3>
					<img
						src="/icons/arrow-right.svg"
						alt="right arrow icon"
						class="news-content-date_icon"
					/>
				</div>
			</div>
		</div>

		<div class="news-btn">
			<button>
				Все новости
				<Icon
					icon="invoice"
					:size="16"
				/>
			</button>
		</div>
	</section>
</template>

<style lang="scss">
	.news {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 20px;
		margin: 320px auto auto;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			gap: 44px;
			max-width: 700px;
		}

		@media (min-width: 1366px) {
			gap: 44px;
			max-width: 960px;
		}

		&_wrapper {
			display: flex;
			flex-direction: column;
			gap: 50px;
			margin-top: 30px;

			@media (min-width: 768px) {
				flex-direction: row;
				gap: 56px;
				margin-top: 26px;
			}

			@media (min-width: 1366px) {
				gap: 64px;
			}
		}

		&-title {
			width: 100%;
			max-width: 300px;

			@media (min-width: 768px) {
				max-width: 430px;
			}

			@media (min-width: 1366px) {
				max-width: 460px;
			}
		}

		&-content {
			display: flex;
			flex-direction: column;
			gap: 20px;
			width: 100%;
			max-width: 300px;

			@media (min-width: 768px) {
				gap: 28px;
				max-width: 322px;
			}

			@media (min-width: 1366px) {
				max-width: 448px;
			}

			&-item {
				display: inline-flex;
				flex-direction: column;
				gap: 10px;
				margin-top: 8px;
				width: 100%;

				@media (min-width: 768px) {
					gap: 12px;
				}

				@media (min-width: 1366px) {
					max-width: 416px;
				}

				&_description {
					color: var(--muted);
				}
			}

			&-date {
				display: flex;
				align-items: center;
				gap: 28px;
				cursor: pointer;
				margin-top: 10px;
				color: var(--primary);

				&_icon {
					filter: brightness(0);
					aspect-ratio: 1/1;
					width: 24px;
				}
			}
		}

		&-btn {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 100%;
		}
	}
</style>
