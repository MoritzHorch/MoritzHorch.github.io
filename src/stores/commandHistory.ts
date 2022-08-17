import { writable } from 'svelte/store';

export interface CommandHistoryEntry {
  command: string;
  output: string;
}

export const commandHistory = writable<CommandHistoryEntry[]>([
  {
    command: 'foo',
    output: 'The result of this command is bar'
  }
]);
