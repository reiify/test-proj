<script setup lang="ts">
	import Icon from '@/components/Icon.vue';
	import { Nav } from '@/interface/interface';

	const props = defineProps<{
		menuBtn: string;
		menuIcon: string;
	}>();

	const links: Nav[] = [
		{
			id: 1,
			label: 'О компании',
		},
		{
			id: 2,
			label: 'Каталог',
		},
		{
			id: 3,
			label: 'Акции',
		},
		{
			id: 4,
			label: 'Услуги',
		},
		{
			id: 5,
			label: 'Контакты',
		},
	];
</script>

<template>
	<header>
		<nav class="nav">
			<img
				src="/logo.png"
				alt="logotype"
			/>

			<div class="nav-btns">
				<img
					src="/icons/menu.svg"
					alt="menu icon"
					class="nav-link"
				/>
				<a
					href="#"
					v-for="link in links"
					:key="link.id"
					class="nav-link"
					>{{ link.label }}</a
				>
				<img
					src="/icons/search.svg"
					alt="search icon"
					class="nav-link"
				/>
			</div>

			<div class="nav-btns">
				<button class="nav-btn">
					<Icon
						icon="user"
						:size="20"
					/>
				</button>
				<button class="nav-btn">
					<Icon
						icon="cart"
						:size="20"
					/>
				</button>
				<button>
					{{ props.menuBtn }}
					<img
						:src="props.menuIcon"
						alt="user icon"
					/>
				</button>
			</div>
		</nav>
	</header>
</template>

<style lang="scss">
	.nav {
		display: flex;
		position: sticky;
		top: 0;
		justify-content: center;
		align-items: center;
		z-index: 10;
		border-bottom: 2px solid #e5e5e5;
		background-color: #f2f2f2;
		padding: 20px 34px;
		width: 100%;
		height: 60px;

		@media (min-width: 768px) {
			justify-content: space-between;
		}

		@media (min-width: 1366px) {
			padding: 20px 84px;
		}

		&-link {
			display: none;
			cursor: pointer;

			@media (min-width: 1366px) {
				display: block;
			}
		}

		&-btns {
			display: none;

			@media (min-width: 768px) {
				display: flex;
				gap: 28px;
			}
		}
		&-btn {
			display: none;
			justify-content: center;
			align-items: center;
			padding: 0;
			width: 40px;
			height: 40px;

			@media (min-width: 768px) {
				display: flex;
			}
		}
	}
</style>
