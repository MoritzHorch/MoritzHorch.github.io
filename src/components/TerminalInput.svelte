<script lang="ts">
  import { commandHistory } from '@/stores/commandHistory';

  let command = '';

  function onKeyEnterUp(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.key === 'Enter') {
      commandHistory.update(entries => [...entries, command]);
      command = '';
    }
  }
</script>

<div class="terminalInput">
  <span style="white-space: pre">$>{' '}</span>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    autofocus
    data-testid="terminal-input"
    class="inputField"
    bind:value={command}
    on:keyup={onKeyEnterUp}
  />
</div>

<style>
  .terminalInput {
    display: flex;
    align-items: center;
    margin: 3px;
  }

  .inputField {
    border: none;
    background-color: transparent;
    font-family: 'Roboto Mono Medium', 'Courier New', monospace;
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  .inputField:focus {
    border: none;
    outline: none;
  }
</style>
