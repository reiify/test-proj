<template>
	<section class="about">
		<div class="about-left">
			<div class="about-left_content">
				<h1 class="about-left_content-title">
					<strong class="accent-underline">Пара слов</strong> о нас, производстве <br />
					и брендинге
				</h1>
				<p class="about-left_content-p">
					В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.
				</p>
				<p class="about-left_content-p">
					В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт
					мы упускаем, что ключевые особенности структуры проекта.
				</p>
			</div>
			<button>О компании</button>
		</div>
		<picture class="about-right">
			<source
				media="(min-width: 1366px)"
				srcset="/about/keyboard-lg.png"
			/>
			<source
				media="(min-width: 768px)"
				srcset="/about/keyboard-md.png"
			/>
			<img
				src="/about/keyboard.png"
				alt="keyboard and cup"
			/>
		</picture>
	</section>
</template>

<style lang="scss">
	.about {
		display: flex;
		flex-direction: column;
		gap: 50px;
		margin: auto;
		width: 100%;
		max-width: 300px;

		@media (min-width: 768px) {
			flex-direction: row;
			gap: 28px;
			max-width: 700px;
		}

		@media (min-width: 1366px) {
			gap: 32px;
			max-width: 960px;
		}

		&-left {
			display: flex;
			flex-direction: column;
			order: 1;
			gap: 20px;

			@media (min-width: 768px) {
				order: 0;
				gap: 28px;
			}

			&_content {
				display: flex;
				flex-direction: column;
				gap: 28px;

				@media (min-width: 768px) {
					gap: 44px;
				}
			}
		}

		&-right {
			order: 0;
			border-radius: 28px;
			background-color: var(--accent);
			width: 100%;
			min-width: 300px;
			height: 100%;
			min-height: 300px;

			@media (min-width: 768px) {
				order: 1;
				min-width: 322px;
				min-height: 480px;
			}

			@media (min-width: 1366px) {
				min-width: 480px;
			}
		}
	}
</style>
