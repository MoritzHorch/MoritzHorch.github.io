<script lang="ts">
  import { blur } from 'svelte/transition';
  import { bounceOut } from 'svelte/easing';
  import banner from './assets/banner.txt?raw';

  let terminalInitialized = false;
</script>

<main>
  <p
    in:blur={{ duration: 1500, easing: bounceOut }}
    on:introend={() => (terminalInitialized = true)}
    id="banner"
  >
    {banner}
  </p>
  {#if terminalInitialized}
    <p>$> <span id="cursor">_</span></p>
  {/if}
</main>

<style>
  #banner {
    white-space: pre-wrap;
    line-height: 1.2;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  #cursor {
    animation: blink 1s step-start 0s infinite;
  }
</style>
