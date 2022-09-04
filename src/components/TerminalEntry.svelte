<script lang="ts">
  import { runCommand } from '@/commands';

  export let command: string;
</script>

<div class="command">
  <p>$> {command}</p>
  <p class="output">{runCommand(command)}</p>
</div>

<style>
  .command {
    margin-top: 20px;
    margin-left: 3px;
  }

  .command > p {
    margin: 3px;
  }

  .output {
    white-space: pre-wrap;
  }
</style>
