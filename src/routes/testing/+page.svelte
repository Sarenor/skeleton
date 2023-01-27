<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { InputChip, ListBox } from '@skeletonlabs/skeleton';

	let listBoxSource = [
		{ label: 'EU West', value: 'EU West' },
		{ label: 'US East', value: 'US East' }
	];
	let valueSingle: string | undefined = undefined;

	let valueInputChip: Array<string> = [];

	const submitWithCustomInputs: SubmitFunction = ({ data}) => {
		if(valueSingle) {
			data.append("selectedRegion", valueSingle)
		}
		if(valueInputChip.length > 0 ) {
			data.append("selectedRegion", valueInputChip.toString())
		}

		return async ({ update }) => {
			update();
		};
	}
</script>

<div class="flex justify-center mt-4">
	<form method="POST" use:enhance={submitWithCustomInputs}>
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
				<ListBox name="region" bind:source={listBoxSource} bind:value={valueSingle} />
			</div>
			<InputChip name="chips" bind:value={valueInputChip} />
			<select size="2" name="regionSelect">
				<option value="EU West">EU West</option>
				<option value="US East">US East</option>
			</select>
			<button class="btn btn-filled-primary btn-base mt-3">Log in</button>
		</div>
	</form>
</div>
