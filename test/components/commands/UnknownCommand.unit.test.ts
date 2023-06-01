import UnknownCommand from '@/components/commands/UnknownCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Unknown Command ...', () => {
  it('should render help command', () => {
    render(UnknownCommand);

    expect(
      screen.getByText(
        'Unknown command. Try running "help" to see all available commands.'
      )
    ).toBeInTheDocument();
  });
});
