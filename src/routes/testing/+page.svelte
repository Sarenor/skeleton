<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import RangeSlider from '$lib/components/RangeSlider/RangeSlider.svelte';
	import { InputChip, ListBox } from '@skeletonlabs/skeleton';

	let listBoxSource = [
		{ label: 'EU West', value: 'EU West' },
		{ label: 'US East', value: 'US East' }
	];
	let valueSingle: Array<string> = [];

	let valueInputChip: Array<string> = [];

	
</script>

<div class="flex justify-center mt-4">
	<form method="POST" use:enhance>
		<div class="max-w-prose flex flex-col">
			<label>
				Email
				<input name="email" type="email" />
			</label>
			<label>
				Password
				<input name="password" type="password" />
			</label>
			<div class="card p-4 mt-2">
				<ListBox name="region" bind:source={listBoxSource} bind:value={valueSingle} multiple />
			</div>
			<InputChip name="chips" bind:value={valueInputChip} />
			<select size="2" name="regionSelect" multiple>
				<option value="EU West">EU West</option>
				<option value="US East">US East</option>
			</select>
			<RangeSlider name="range"/>
			<button class="btn btn-filled-primary btn-base mt-3">Log in</button>
		</div>
	</form>
</div>
