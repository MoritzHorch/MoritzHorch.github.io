import HelpCommand from '@/components/commands/HelpCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Help Command ...', () => {
  it('should render help command', () => {
    render(HelpCommand);

    expect(
      screen.getByText('about - a short introduction about myself')
    ).toBeInTheDocument();
    expect(
      screen.getByText('skills - programming languages, tools, practises')
    ).toBeInTheDocument();
  });
});
