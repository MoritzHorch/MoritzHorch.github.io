import { runCommand } from '@/commands';

describe('Commands ...', () => {
  it('should return output of command when exists', () => {
    const output = runCommand('help');

    expect(output).toBe('No command other than help exists.');
  });

  it('should return output of unknown command when not exists', () => {
    const output = runCommand('foo');

    expect(output).toBe(
      'Unknown command. Try running "help" to see all available commands.'
    );
  });
});
