<script lang="ts">
  import HelpCommand from '@/components/commands/HelpCommand.svelte';
  import UnknownCommand from '@/components/commands/UnknownCommand.svelte';
  import AboutCommand from '@/components/commands/AboutCommand.svelte';
  import SkillsCommand from '@/components/commands/SkillsCommand.svelte';

  export let command: string;
</script>

<div class="command">
  <span>$> {command}</span>
  {#if command === 'help'}
    <HelpCommand />
  {:else if command === 'about'}
    <AboutCommand />
  {:else if command === 'skills'}
    <SkillsCommand />
  {:else}
    <UnknownCommand />
  {/if}
</div>

<style>
  .command {
    margin-top: 3px;
    margin-left: 3px;
    margin-bottom: 0px;
  }
</style>
