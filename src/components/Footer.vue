<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Nav } from '@/interface/interface';

	const links: Nav[] = [
		{ id: 1, label: 'О компании' },
		{ id: 2, label: 'Портфолио' },
		{ id: 3, label: 'Вакансии' },
		{ id: 4, label: 'Дилерам' },
		{ id: 5, label: 'Гарантия' },
		{ id: 6, label: 'Контакты' },
		{ id: 7, label: 'Акции' },
		{ id: 8, label: 'Производство' },
		{ id: 9, label: 'Доставка и оплата' },
		{ id: 10, label: 'Обмен и возврат' },
	];

	const services: Nav[] = [
		{ id: 1, label: 'Шелкография' },
		{ id: 2, label: 'Тампопечать' },
		{ id: 3, label: 'Гравировка' },
		{ id: 4, label: 'Клише' },
		{ id: 5, label: 'Полноцветная печать' },
		{ id: 6, label: 'Запись на USB' },
		{ id: 7, label: 'Гравировка' },
		{ id: 8, label: 'Тиснение' },
		{ id: 9, label: 'Печать на сумках' },
		{ id: 10, label: 'Полимерная заливка' },
		{ id: 11, label: 'Услуги дизайнера' },
	];

	const categories: Nav[] = [
		{ id: 1, label: 'Аксессуары' },
		{ id: 2, label: 'Текстиль' },
		{ id: 3, label: 'Флеш-карты' },
		{ id: 4, label: 'Внешние накопители' },
		{ id: 5, label: 'Канцелярия' },
		{ id: 6, label: 'Умные вещи' },
		{ id: 7, label: 'Xiaomi' },
		{ id: 8, label: 'Упаковка' },
		{ id: 9, label: 'Остальные события' },
		{ id: 10, label: 'Праздники' },
	];
</script>

<template>
	<footer class="foo">
		<img
			src="/icons/aim.svg"
			alt="aim icon"
			class="foo-aim"
		/>

		<div class="foo-content">
			<div class="foo_links-main">
				<img
					src="/logo.png"
					alt="logotype"
					class="foo-logo"
				/>

				<div class="foo-links foo-links_main">
					<a
						href="#"
						class="foo-link menu-text"
						v-for="link in links"
						:key="link.id"
					>
						{{ link.label }}
					</a>
				</div>
			</div>

			<div class="foo_links-container">
				<div class="foo-links-title">
					<span class="menu-text">Услуги</span>
					<hr class="separator" />
				</div>
				<div class="foo-links foo-links_services">
					<a
						href="#"
						class="foo-link menu-text"
						v-for="link in services"
						:key="link.id"
					>
						{{ link.label }}
					</a>
				</div>
			</div>

			<div class="foo_links-container">
				<div class="foo-links-title">
					<span class="menu-text">Каталог</span>
					<hr class="separator" />
				</div>
				<div class="foo-links foo-links_categories">
					<a
						href="#"
						class="foo-link menu-text"
						v-for="link in categories"
						:key="link.id"
					>
						{{ link.label }}
					</a>
				</div>
			</div>
		</div>
		<div class="foo-contacts">
			<div class="foo-contacts_social">
				<button class="foo-contacts_social-btn">
					<Icon
						icon="instagram"
						:size="20"
					/>
				</button>
				<button class="foo-contacts_social-btn">
					<Icon
						icon="facebook"
						:size="20"
					/>
				</button>
				<button class="foo-contacts_social-btn">
					<Icon
						icon="youtube"
						:size="20"
					/>
				</button>
			</div>

			<div class="foo-contacts_links">
				<div class="foo-contacts_link">
					<p class="menu-text foo-contacts_link-title">Москва</p>
					<a href="tel:+79451331628">+7 (945) 133-16-28</a>
				</div>

				<div class="foo-contacts_link">
					<p class="menu-text foo-contacts_link-title">Улан-Удэ</p>
					<a href="tel:+79252728308">+7 (925) 272-83-08</a>
				</div>

				<div class="foo-contacts_link">
					<p class="menu-text foo-contacts_link_docs">
						<Icon
							icon="user"
							:size="20"
						/>
						Личный кабинет
					</p>
					<a href="mailto:info@reklem.ru">info@reklem.ru</a>
				</div>

				<div class="foo-contacts_link">
					<p class="menu-text foo-contacts_link_docs">
						<Icon
							icon="document"
							:size="20"
						/>
						Обработка данных
					</p>
					<span class="menu-text foo-contacts_link-title">© Copyright 2021</span>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
	.foo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 30px;
		background-color: var(--neutral);
		width: 100%;

		&-aim {
			margin: -10px auto auto;
			aspect-ratio: 1/1;
			width: 20px;
		}

		&-logo {
			width: 130px;
			height: 30px;
		}

		&_links-main {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 40px;

			@media (min-width: 768px) {
				flex-direction: row;
				align-items: flex-start;
				gap: 45px;
			}
		}
		&-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 40px;
			padding: 40px 10px;
			overflow: hidden;

			@media (min-width: 768px) {
				padding: 50px 24px;
			}
		}

		&-links {
			display: inline-flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 18px;
			width: 100%;
			height: 100%;

			@media (min-width: 768px) {
				gap: 20px;
			}

			&_main {
				max-height: 162px;

				@media (min-width: 768px) {
					max-height: 140px;

					a:nth-child(7) {
						margin-bottom: 1%;
					}
				}
			}

			&_services {
				max-height: 198px;

				@media (min-width: 768px) {
					max-height: 100px;
				}
			}

			&_categories {
				max-height: 162px;

				@media (min-width: 768px) {
					max-height: 100px;

					a:nth-child(8) {
						margin-bottom: 1%;
					}
				}
			}

			&-title {
				display: inline-flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 18px;
				width: 100%;
				color: var(--muted);

				.separator {
					margin: 0 0 0 auto;
					width: 135px;

					@media (min-width: 768px) {
						width: 525px;
					}
				}
			}
		}

		&-link {
			@media (hover: hover) {
				&:hover {
					color: #ff2f54;
				}
			}

			@media (min-width: 768px) {
				&:nth-child(1) {
					width: 20%;
				}
			}
		}

		&-contacts {
			display: flex;
			flex-direction: column;
			gap: 40px;
			border-top: solid #e5e5e5 2px;
			padding: 18px 10px 110px;

			@media (min-width: 768px) {
				column-gap: 174px;
				flex-direction: row;
				justify-content: space-between;
				padding: 20px 46px 50px 34px;
			}

			&_social {
				display: flex;
				justify-content: center;
				gap: 28px;

				&-btn {
					padding: 0;
					width: 40px;
					height: 40px;
					color: var(--secondary);
				}
			}

			&_links {
				display: flex;
				row-gap: 40px;
				flex-wrap: wrap;
				justify-content: space-between;
			}

			&_link {
				display: inline-flex;
				flex-direction: column;
				gap: 18px;

				@media (min-width: 768px) {
					width: 50%;
				}

				&-title {
					color: var(--muted);
				}

				&_docs {
					display: inline-flex;
					align-items: center;
					gap: 4px;
					color: var(--secondary);
				}
			}
		}
	}
</style>
