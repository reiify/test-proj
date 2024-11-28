<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import Window from '@/components/Window.vue';
</script>

<template>
	<section class="b2b">
		<img
			src="/icons/union.svg"
			alt="union"
			class="b2b_union"
		/>
		<div class="people">
			<img
				src="/people.png"
				alt="Customer"
				class="people-img"
			/>
			<h2 class="people-name">Анна Вагнер</h2>
			<p class="p-sm people-company">«Леруа Мерлен Восток»</p>
		</div>

		<div class="company">
			<img
				src="/leroy.svg"
				alt="Company logo"
			/>
			<div class="company-arrows">
				<img
					src="/icons/chevron-left.svg"
					alt="chevron left icon"
				/>
				<img
					src="/icons/chevron-right.svg"
					alt="chevron right icon"
				/>
			</div>
		</div>

		<div class="comment">
			<h2 class="comment-title">Компания с которой хочется работать снова и снова.</h2>
			<p>
				Принимая во внимание показатели успешности, синтетическое тестирование способствует повышению качества анализа
				существующих паттернов поведения. Противоположная точка зрения подразумевает.
			</p>
		</div>

		<div class="windows">
			<button class="windows-btn">
				Больше отзывов
				<Icon
					icon="chat"
					:size="16"
				/>
			</button>
			<Window content-class="window-content">
				<div class="window-item">
					<h3 class="window-item_title">639 568 штук</h3>
					<p class="window-item_description">
						произвели изделий <br />
						за 2019 год
					</p>
				</div>

				<div class="window-item">
					<h3 class="window-item_title">13 лет</h3>
					<p class="window-item_description p-sm">опыта с 2008 года</p>
				</div>

				<div class="windows_child">
					<Window
						content-class="window-content_child"
						dots="two"
					>
						<div class="window-item_child">
							<h3 class="window-item_title_child">Для рекламных агентств</h3>
							<p class="window-item_description p-sm">Дополнительная выгода, если занимаетесь рекламой</p>
						</div>
					</Window>
					<button class="windows-btn_child">Подробнее</button>
				</div>

				<div class="window-item">
					<h3 class="window-item_title">65 компаний</h3>
					<p class="window-item_description p-sm">сотрудничают с нами на постоянной основе</p>
				</div>
			</Window>
		</div>
	</section>
</template>

<style lang="scss">
	.b2b {
		display: flex;
		position: relative;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 30px;
		background-color: var(--primary);
		padding: 50px 10px;
		width: 100%;

		@media (min-width: 768px) {
			gap: 18px;
			padding: 50px 34px;
		}

		@media (min-width: 1366px) {
			gap: 32px;
			border-radius: 0 28px 28px 0;
			padding: 50px 32px 137px 83px;
			width: 65%;
		}

		@media (min-width: 1920px) {
			padding: 50px 32px 137px 360px;
			width: 1184px;
		}

		&_union {
			display: none;
			position: absolute;
			top: -20px;
			right: -32%;
			transform: scale(-1, 1);

			@media (min-width: 1366px) {
				display: block;
			}

			@media (min-width: 1920px) {
				right: -21%;
			}
		}
	}

	.people {
		order: 0;
		margin-left: 20px;
		width: 100%;
		max-width: 162px;

		@media (min-width: 768px) {
			margin-left: 0;
		}

		&-img {
			aspect-ratio: 1/1;
			width: 60px;

			@media (min-width: 768px) {
				width: 54px;
			}
		}

		&-name {
			margin-top: 10px;
			color: var(--white);
			font-weight: bold;

			@media (min-width: 768px) {
				margin-top: 12px;
			}
		}

		&-company {
			margin-top: 4px;
			color: var(--secondary);
		}
	}

	.company {
		display: flex;
		flex-direction: column;
		align-items: center;
		order: 1;
		gap: 36px;

		@media (min-width: 768px) {
			order: 2;
			gap: 171px;
			margin-right: 1px;
		}

		@media (min-width: 1366px) {
			gap: 72px;
		}

		img {
			width: 78px;
			height: 54px;

			@media (min-width: 768px) {
				width: 128px;
			}
		}

		&-arrows {
			display: flex;
			gap: 18px;

			img {
				aspect-ratio: 1/1;
				width: 30px;
			}
		}
	}

	.comment {
		display: inline-flex;
		flex-direction: column;
		order: 2;
		gap: 18px;
		width: 100%;
		max-width: 300px;
		color: var(--white);

		@media (min-width: 768px) {
			order: 1;
			margin-left: 22px;
			max-width: 350px;
		}

		@media (min-width: 1366px) {
			margin-left: 0;
			max-width: 416px;
		}

		&-title {
			font-weight: bold;
		}
	}

	.windows {
		display: flex;
		position: relative;
		flex-direction: column;
		order: 4;
		gap: 50px;
		margin: 20px 0 -60%;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			margin-bottom: -20%;
			max-width: 700px;
		}

		@media (min-width: 1366px) {
			position: absolute;
			bottom: 40%;
			margin: 0 0 -25% 15%;
			width: auto;
			max-width: 960px;
		}

		@media (min-width: 1920px) {
			bottom: 57%;
			margin: 0 0 -25% 11%;
		}

		&_child {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			z-index: 1;
			margin: 0 -20px;
			width: 100%;
			max-width: 150px;

			@media (min-width: 768px) {
				margin: 0;
				max-width: 184px;
			}

			@media (min-width: 1366px) {
				max-width: 240px;
			}
		}

		&-btn {
			position: relative;

			@media (min-width: 768px) {
				position: absolute;
				top: -55%;
			}

			@media (min-width: 1366px) {
				right: 0;
			}
		}
	}

	.window {
		&-content {
			display: flex;
			flex-wrap: wrap;
			gap: 28px 15px;
			margin-bottom: -60%;
			padding: 26px 5px 30px 20px;

			@media (min-width: 768px) {
				flex-wrap: nowrap;
				gap: 0;
				margin-bottom: 0;
				padding: 26px 20px 32px;
				height: 150px;
			}

			@media (min-width: 1366px) {
				gap: 40px;
				padding: 26px 40px 28px;
				width: 960px;
			}

			&_child {
				padding: 26px 10px 16px;
				width: 100%;
				max-width: 130px;

				@media (min-width: 768px) {
					margin: auto;
					padding: 26px 0 28px;
					max-width: 144px;
				}

				@media (min-width: 1366px) {
					padding: 26px 40px 28px;
					max-width: 240px;
				}
			}
		}

		&-item {
			display: inline-flex;
			flex-direction: column;
			gap: 10px;
			width: 100%;
			max-width: 130px;

			@media (min-width: 768px) {
				max-width: 144px;

				&:nth-of-type(2) {
					margin-right: 14px;

					@media (min-width: 1366px) {
						margin-right: 0;
						margin-left: 40px;
					}
				}
			}

			@media (min-width: 1366px) {
				max-width: 160px;
			}

			&:nth-of-type(4) {
				margin-left: 15px;

				@media (min-width: 768px) {
					margin-left: 30px;
				}

				@media (min-width: 1366px) {
					margin-left: 0;
				}
			}

			&_child {
				display: inline-flex;
				flex-direction: column;
				gap: 16px;
				width: 100%;

				@media (min-width: 1366px) {
					width: 160px;
				}
			}

			&_description {
				color: var(--muted);

				@media (min-width: 1366px) {
					width: 160px;
				}
			}
		}
	}
</style>
