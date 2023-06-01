<script lang="ts">
  import { commandHistory } from '@/stores/commandHistory';
  import TerminalBanner from '@/components/TerminalBanner.svelte';
  import TerminalEntry from '@/components/TerminalEntry.svelte';
  import TerminalInput from '@/components/TerminalInput.svelte';

  export let terminalInitialized = false;
</script>

<main>
  <TerminalBanner bind:terminalInitialized />
  {#if terminalInitialized}
    {#each $commandHistory as command}
      <TerminalEntry {command} />
    {/each}
    <TerminalInput />
  {/if}
</main>
