<script lang="ts">
  import { inview } from "svelte-inview";
  import type { Options } from "svelte-inview";
  import { typewriter } from "../../utils/typewriter";

  let isInView: boolean;

  const options: Options = {
    unobserveOnEnter: false,
  };
</script>

<div
  use:inview={options}
  on:inview_change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
    <p
      class="text-5xl animate-fade-up animate-duration-[2000ms] animate-delay-100 animate-once"
      transition:typewriter
    >
      Hello there!
    </p>
  {/if}
</div>
