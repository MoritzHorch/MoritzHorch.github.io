<script lang="ts">
  import help from '@/assets/help.txt?raw';
  import about from '@/assets/about.txt?raw';
  import skills from '@/assets/skills.txt?raw';
  import career from '@/assets/career.txt?raw';

  export let command: string;
</script>

<div class="command">
  <span>$> {command}</span>
  <p class="commandContent">
    {#if command === 'help'}
      {help}
    {:else if command === 'about'}
      {about}
    {:else if command === 'skills'}
      {skills}
    {:else if command === 'career'}
      {career}
    {:else}
      Unknown command. Try running "help" to see all available commands.
    {/if}
  </p>
</div>

<style>
  .command {
    margin-top: 3px;
    margin-left: 3px;
    margin-bottom: 30px;
  }

  .commandContent {
    white-space: pre-line;
  }
</style>
