<script setup lang="ts">
	import { onBeforeUnmount, onMounted, ref } from 'vue';

	import Footer from './components/Footer.vue';
	import Header from './components/Header.vue';
	import Main from './components/Main.vue';

	const menuBtnText = ref<string>('Меню');
	const menuIconSrc = ref<string>('/icons/menu.svg');

	const updateButtonText = () => {
		menuBtnText.value = window.innerWidth <= 1366 ? 'Меню' : 'Конструктор';
		menuIconSrc.value = window.innerWidth <= 1366 ? '/icons/menu.svg' : '/icons/edit.svg';
	};

	onMounted(() => {
		updateButtonText();
		window.addEventListener('resize', updateButtonText);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', updateButtonText);
	});
</script>

<template>
	<div class="wrapper">
		<Header
			:menu-btn="menuBtnText"
			:menu-icon="menuIconSrc"
		/>
		<Main />
		<Footer />
	</div>
</template>

<style></style>
