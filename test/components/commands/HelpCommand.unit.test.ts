import HelpCommand from '@/components/commands/HelpCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Help Command ...', () => {
  it('should render help command', () => {
    render(HelpCommand);

    expect(
      screen.getByText('No command other than help exists.')
    ).toBeInTheDocument();
  });
});
