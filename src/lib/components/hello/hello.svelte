<script lang="ts">
  import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, Options } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: false,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    console.log("here! ", isInView);
  };
</script>
<div use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
    <p class="text-5xl" transition:fly={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>Hi there!</p>
  {/if}
</div>