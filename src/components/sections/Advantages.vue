<script setup lang="ts">
	import { Advantages } from '@/interface/interface';

	const advantages: Advantages[] = [
		{
			id: 1,
			icon: '/icons/adv-cloud.svg',
			title: 'Онлайн конструктор',
			description: 'С конструктором создавайте свои уникальные дизайны',
		},
		{
			id: 2,
			icon: '/icons/adv-history.svg',
			title: 'Принт за 24 часа',
			description: 'Некоторые заказы можем произвести быстрее суток',
		},
		{
			id: 3,
			icon: '/icons/adv-status.svg',
			title: 'Быстрая доставка',
			description: 'Сотрудничаем с быстрыми и надежными службами',
		},
		{
			id: 4,
			icon: '/icons/adv-box.svg',
			title: 'Только ОПТ',
			description: 'Работаем на большие объемы брендинга',
		},
	];
</script>

<template>
	<section class="advantages">
		<div
			v-for="adv in advantages"
			:key="adv.id"
			class="advantage"
		>
			<img
				:src="adv.icon"
				alt="advantage icon"
				class="advantage-icon"
			/>
			<h3 class="advantage-title">{{ adv.title }}</h3>
			<p class="advantage-description">{{ adv.description }}</p>
		</div>
	</section>
</template>

<style lang="scss">
	.advantages {
		display: flex;
		flex-wrap: wrap;
		gap: 28px 0;
		margin: auto;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			max-width: 700px;
		}
		@media (min-width: 1366px) {
			gap: 64px;
			max-width: 960px;
		}
	}

	.advantage {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
		max-width: 150px;

		@media (min-width: 768px) {
			max-width: 175px;
		}

		@media (min-width: 1366px) {
			max-width: 192px;
		}
		&-icon {
			width: 50px;
			height: 50px;
		}

		&-title {
			width: calc(100% - 10px);
		}

		&-description {
			width: calc(100% - 10px);
			color: var(--muted);
		}
	}
</style>
