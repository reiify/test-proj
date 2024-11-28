<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Faq } from '@/interface/interface';

	const faqs: Faq[] = [
		{ id: 1, label: 'Вы доставляете по всей России?' },
		{ id: 2, label: 'А на бумаге печатаете?' },
		{ id: 3, label: 'Можно сделать принт на своей вещи?' },
		{ id: 4, label: 'Как быстро сможете произвести заказ?' },
		{ id: 5, label: 'Можно заказать одну какую-то позицию?' },
		{ id: 6, label: 'Из-за заграницы можно заказать?' },
		{ id: 7, label: 'Можно организовать самовывоз?' },
		{ id: 8, label: 'А если я не юр лицо, будем сотрудничать?' },
	];
</script>

<template>
	<section class="faq">
		<h1 class="faq-title">Часто задаваемые <strong class="accent-underline">вопросы</strong></h1>

		<div class="faq_wrapper">
			<div
				class="faq-content"
				v-for="faq in faqs"
				:key="faq.id"
			>
				<div class="separator" />

				<div class="faq-item">
					<h3 class="faq-item_title">{{ faq.label }}</h3>
					<img
						src="/icons/chevron-down.svg"
						alt="arrow down icon"
						class="faq-item_icon"
					/>
				</div>
			</div>
		</div>

		<div class="faq-btn">
			<button>
				Больше вопросов
				<Icon
					icon="faq"
					:size="16"
				/>
			</button>
		</div>
	</section>
</template>

<style lang="scss">
	.faq {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 30px auto auto;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			gap: 44px;
			max-width: 700px;
		}

		@media (min-width: 1366px) {
			max-width: 960px;
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

		&_wrapper {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			width: 100%;
			max-width: 300px;
			height: 100%;

			@media (min-width: 768px) {
				gap: 0 56px;
				max-width: 700px;
				max-height: 248px;
			}

			@media (min-width: 1366px) {
				gap: 0 64px;
				max-width: 960px;
			}
		}

		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;
			padding: 17px 0;

			@media (min-width: 768px) {
				padding: 20px 0;
			}
		}

		&-btn {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
