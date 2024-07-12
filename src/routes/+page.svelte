<script>
  import { 
    LightSwitch,
    AppRail,
    AppRailTile,
    AppRailAnchor
  } from '@skeletonlabs/skeleton';
  import { Terminal, House } from 'lucide-svelte';

  let currentTile = 0;
</script>

<div class="h-screen bg-surface-100-800-token hero-gradient">
  <AppRail width="w-16" border="border-r border-surface-700">
    <svelte:fragment slot="lead">
      <AppRailAnchor href="/" >
        <div class="flex justify-center">
          <Terminal strokeWidth={2.5} size={32} class="stroke-primary-500" />
        </div>
      </AppRailAnchor>
    </svelte:fragment>
    <AppRailTile bind:group={currentTile} name="welcome" value={0} title="welcome">
      <svelte:fragment slot="lead"><House  class="w-full"/></svelte:fragment>
      <span>Welcome</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="whoami" value={1} title="whoami">
      <svelte:fragment slot="lead">(icon)</svelte:fragment>
      <span>About</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="blog" value={2} title="blog">
      <svelte:fragment slot="lead">(icon)</svelte:fragment>
      <span>Blog</span>
    </AppRailTile>
    <svelte:fragment slot="trail">
      <div class="flex items-center h-16 justify-center">

        <LightSwitch />
      </div>
    </svelte:fragment>
  </AppRail>

</div>

<style lang="postcss">
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 100%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>