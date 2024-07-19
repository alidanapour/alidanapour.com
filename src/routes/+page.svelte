<script lang="ts">
  import Hello from '$lib/components/hello/hello.svelte';
  import { 
    LightSwitch,
    AppRail,
    AppRailTile,
    AppRailAnchor
  } from '@skeletonlabs/skeleton';
  import { Terminal, House } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let currentTile = 0;

  onMount(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentTile = parseInt((entry.target as HTMLElement).dataset.index || '0', 10);
        }
      })
    }, options);

    const snapElements = document.querySelectorAll("section");
    snapElements.forEach((el) => {
      observer.observe(el as HTMLElement);
    })

    return() => {
      snapElements.forEach((el) => {
        observer.unobserve(el as HTMLElement);
      })  
    }
  });

  function scrollHandler(index: number) {
    const target = document.querySelector(`section[data-index='${index}']`) as HTMLElement;
    if (target) {
      const container = document.querySelector('.snap-container') as HTMLElement;
      container.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }

</script>

<div class="flex flex-row h-screen bg-surface-100-800-token hero-gradient">
  <div>
    <AppRail width="w-fit" border="border-r border-surface-700">
      <svelte:fragment slot="lead">
        <AppRailAnchor >
          <div class="flex justify-center">
            <Terminal strokeWidth={2.5} size={32} class="stroke-primary-500" />
          </div>
        </AppRailAnchor>
      </svelte:fragment>
      <AppRailTile 
        on:click={()=> scrollHandler(0)}
        bind:group={currentTile}
        name="home"
        value={0}
        title="home"
      >
        <svelte:fragment slot="lead"><House  class="w-full"/></svelte:fragment>
        <span>Home</span>
      </AppRailTile>
      <AppRailTile
        on:click={()=> scrollHandler(1)}
        bind:group={currentTile}
        name="whoami"
        value={1}
        title="whoami"
      >
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Experience</span>
      </AppRailTile>
      <AppRailTile
        on:click={()=> scrollHandler(2)}
        bind:group={currentTile}
        name="blog"
        value={2}
        title="blog"
        >
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Contact</span>
      </AppRailTile>
      <svelte:fragment slot="trail">
        <div class="flex items-center h-16 justify-center">
  
          <LightSwitch />
        </div>
      </svelte:fragment>
    </AppRail>
  </div>
  <div class="flex flex-col h-screen w-full overflow-y-scroll snap-y snap-mandatory snap-container">
    <section class="min-h-screen snap-start" data-index={0}>
      <Hello />
    </section>
    <section class="min-h-screen snap-start snap-always" data-index={1}>
      <p class="text-5xl">About</p>
    </section>
    <section class="min-h-screen snap-start" data-index={2}>
      <p class="text-5xl">Blog</p>
    </section>
  </div>
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