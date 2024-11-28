<script setup lang="ts">
	let phone = '';
</script>

<template>
	<section class="help">
		<div class="help-wrapper_text">
			<h1 class="help-title">Нужна <strong class="primary-underline">помощь?</strong></h1>
			<p class="help-description">
				Оставьте свои данные — мы перезвоним и решим вопрос. Помните, оставляя контакты вы даете согласие на обработку
				персональных данных.
			</p>
		</div>

		<form
			action="send"
			method="post"
			class="form"
		>
			<fieldset>
				<label
					for="name"
					class="form-label"
					>Имя</label
				>
				<input
					type="text"
					autocapitalize="true"
					autocomplete="given-name"
					id="name"
				/>
			</fieldset>
			<fieldset>
				<vue-tel-input
					v-model="phone"
					:dropdownOptins="{
						disabled: true,
						showFlags: false,
						showDialCodeInList: false,
					}"
					:inputOptions="{
						placeholder: '+7 000 000 00 00',
						required: true,
						validCharacterOnly: true,
					}"
				/>
			</fieldset>
			<fieldset></fieldset>
		</form>
	</section>
</template>

<style lang="scss">
	.help {
		display: flex;
		flex-direction: column;
		gap: 28px;
		margin-top: 30px;
		background-image: url('/help/bg-sm.png');
		background-position: bottom right;
		background-repeat: no-repeat;
		background-color: var(--primary);
		padding: 40px 10px 50px;
		width: 100%;
		color: var(--white);

		@media (min-width: 768px) {
			background-image: url('/help/bg-md.png');
			background-position: right;
			padding: 50px 34px;
		}

		@media (min-width: 1366px) {
			margin: 30px auto auto;
			border-radius: 28px;
			background-image: url('/help/bg-lg.png');
			padding: 40px 124px 50px 96px;
			max-width: 960px;
		}

		&-wrapper {
			&_text {
				display: flex;
				flex-direction: column;
				gap: 28px;

				@media (min-width: 768px) {
					gap: 44px;
				}
			}
		}

		&-description {
			width: 100%;
			max-width: 300px;
			color: var(--secondary);

			@media (min-width: 768px) {
				max-width: 350px;
			}
		}
	}
</style>
