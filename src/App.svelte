<script lang="ts">
  import { blur } from 'svelte/transition';
  import { bounceOut } from 'svelte/easing';
  import banner from './assets/banner.txt?raw';
  import { commandHistory } from './stores/commandHistory';

  export let terminalInitialized = false;
</script>

<main>
  <p
    in:blur={{ duration: 1, easing: bounceOut }}
    on:introend={() => (terminalInitialized = true)}
    id="banner"
  >
    {banner}
  </p>
  {#if terminalInitialized}
    {#each $commandHistory as { command, output }}
      <div class="commandhistoryentry">
        <p>$> {command}</p>
        <p class="commandoutput">{output}</p>
      </div>
    {/each}
    <p>$> <span id="cursor">_</span></p>
  {/if}
</main>

<style>
  #banner {
    white-space: pre-wrap;
    line-height: 1.2;
  }

  .commandhistoryentry {
    margin-top: 20px;
  }
  .commandhistoryentry > p {
    margin: 3px;
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
