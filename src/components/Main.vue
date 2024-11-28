<script setup lang="ts">
	import About from '@/components/sections/About.vue';
	import Advantages from '@/components/sections/Advantages.vue';
	import B2b from '@/components/sections/B2b.vue';
	import Category from '@/components/sections/Category.vue';
	import Designer from '@/components/sections/Designer.vue';
	import Faq from '@/components/sections/Faq.vue';
	import Help from '@/components/sections/Help.vue';
	import Hero from '@/components/sections/Hero.vue';
	import News from '@/components/sections/News.vue';
	import Popular from '@/components/sections/Popular.vue';
	import Services from '@/components/sections/Services.vue';
	import { onBeforeUnmount, onMounted, ref } from 'vue';

	const openConstructor = ref<string>('Доступно через компьютер');
	const isDisabled = ref<boolean>(true);
	const addViewBtn = ref<string>('Вид');
	const showCaretIcon = ref<boolean>(false);

	const updateButtonText = () => {
		openConstructor.value = window.innerWidth <= 1366 ? 'Доступно через компьютер' : 'Открыть конструктор';
		isDisabled.value = window.innerWidth <= 1366 ? true : false;
		addViewBtn.value = window.innerWidth >= 768 ? 'Добавить вид' : 'Вид';
		showCaretIcon.value = window.innerWidth >= 1366 ? true : false;
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
	<main>
		<Hero />
		<About />

		<div class="separator" />

		<Advantages />

		<Designer
			:open-constructor="openConstructor"
			:is-disabled="isDisabled"
		/>

		<Popular
			:add-btn-text="addViewBtn"
			:show-icon="showCaretIcon"
		/>

		<Services />
		<Category />
		<B2b />
		<News />
		<Faq />
		<Help />
	</main>
</template>
