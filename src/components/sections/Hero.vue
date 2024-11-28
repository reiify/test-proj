<template>
	<section class="hero">
		<div class="hero-content">
			<h1 class="hero-content_title">
				Планируете сделать <strong class="accent-underline">принт?</strong> <br />
				Вы пришли по адресу
			</h1>
			<p class="hero-content_description">
				Reklem - только оптовая работа высокого качества с индивидуальным подходом. Работаем с 2008 года.
			</p>

			<button>Оставить заявку</button>
		</div>

		<div class="hero-images">
			<picture>
				<source
					media="(min-width: 768px)"
					srcset="/hero/01.png"
				/>
				<img
					src="/hero/05.png"
					alt="hero 1"
				/>
			</picture>
			<picture>
				<source
					media="(min-width: 768px)"
					srcset="/hero/04-lg.png"
				/>
				<img
					src="/hero/04.png"
					alt="hero 2"
				/>
			</picture>
			<picture>
				<source
					media="(min-width: 768px)"
					srcset="/hero/02.png"
				/>
				<img
					src="/hero/03.png"
					alt="hero 3"
				/>
			</picture>
			<div class="aim">
				<img
					src="/icons/aim.svg"
					alt="union"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		gap: 64px;
		background-image: none;
		background-position: bottom;
		background-repeat: no-repeat;
		background-color: #f2f2f2;

		@media (min-width: 1366px) {
			background-image: url('/hero/hero.png');
			height: 680px;
		}

		&-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			margin: 80px auto 0;
			width: 100%;

			&_title {
				text-align: center;
			}

			&_description {
				margin-top: 8px;
				width: 100%;
				max-width: 290px;
				text-align: center;

				@media (min-width: 768px) {
					max-width: 448px;
				}
			}
		}

		&-images {
			display: flex;
			justify-content: center;
			align-items: flex-end;

			@media (min-width: 1366px) {
				picture {
					display: none;
				}
			}
		}
	}
	.aim {
		display: flex;
		position: absolute;
		justify-content: center;
		margin-bottom: -3%;
		width: 100%;

		@media (min-width: 768px) {
			margin-bottom: -1%;
		}

		@media (min-width: 1366px) {
			margin-bottom: -23%;
		}

		@media (min-width: 1920px) {
			margin-bottom: -17.5%;
		}
	}
</style>
