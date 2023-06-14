<script lang="ts">
  import help from '@/assets/help.txt?raw';
  import about from '@/assets/about.txt?raw';
  import skills from '@/assets/skills.txt?raw';
  import career from '@/assets/career.txt?raw';
  import hobbies from '@/assets/hobbies.txt?raw';

  export let command: string;

  const commandContentMap: Record<string, string> = {
    help,
    about,
    skills,
    career,
    hobbies
  };

  const commandContent =
    commandContentMap[command] ??
    'Unknown command. Try running "help" to see all available commands.';
</script>

<div class="command">
  <span>$> {command}</span>
  <p class="commandContent">
    {commandContent}
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
