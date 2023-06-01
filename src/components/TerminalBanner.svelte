<script lang="ts">
  import banner from '@/assets/banner.txt?raw';
  import { blur } from 'svelte/transition';
  import { bounceOut } from 'svelte/easing';

  export let terminalInitialized = false;

  function finishInitialization() {
    terminalInitialized = true;
  }
</script>

<p
  in:blur={{ duration: 1500, easing: bounceOut }}
  on:introend={finishInitialization}
  id="banner"
  data-testid="banner"
>
  {banner}
</p>

<style>
  #banner {
    white-space: pre-wrap;
    line-height: 1.2;
  }
</style>
