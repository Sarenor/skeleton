<script lang="ts">
	import { generateA11yOnColor, hexToTailwindRgbString } from '$docs/layouts/DocsThemer/colors';
	import { swatchColorClasses } from '$docs/layouts/DocsThemer/settings';
	import type { ColorSettings } from './types';

	/** Pass the color */
	export let color: ColorSettings;

    const updateColor = (shade: number, value: string) => {
        console.log(`shade: ${shade} value:${value}`);
        console.log(`previous value: `, color.palette[shade]);
        color.palette[shade] = {
            hex: value,
            rgb: hexToTailwindRgbString(value),
            on: shade === 500 ? generateA11yOnColor(value) : color.palette[shade].on
        }
        color = color;
    }
</script>

<div class="grid grid-cols-11 gap-0">
	{#each Object.entries(swatchColorClasses[color.key]) as [shade, shadeClasses]}
    <div class="grid grid-rows-[1fr_40px] text-center" class:col-span-2={shade === '500'}>
			<!-- Label -->
			<div class="text-surface-700 dark:text-surface-300 text-sm">
				{shade}
			</div>
			<!-- Swatch -->
			<div class="bg-black/5 dark:bg-white/5">
				<div class="h-full flex justify-center items-center {shadeClasses}">
					{#if shade === '500'}
						<div class="grid grid-cols-[auto_1fr] gap-1.5 place-items-center">
							<i class="fa-solid fa-skull" />
							<span class="hidden xl:inline-block">Text</span>
						</div>
					{/if}
				</div>
			</div>
            <input 
                class="input !rounded-none ml-auto mr-auto mt-2" 
                type="color"
                value={color.palette[shade].hex} 
                on:change={(event) => {updateColor(shade, event?.target?.value)}} />
		</div>
	{/each}
</div>
