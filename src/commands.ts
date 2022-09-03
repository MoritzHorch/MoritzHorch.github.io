import help from '@/assets/commands/help.txt?raw';
import unknown from '@/assets/commands/unknown.txt?raw';

const commands: {
  [key: string]: string;
} = {
  help,
  unknown
};

export function runCommand(command: string): string {
  return commands[command] ? commands[command] : commands.unknown;
}
