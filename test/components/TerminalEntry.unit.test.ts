import { render, screen } from '@testing-library/svelte';
import TerminalEntry from '@/components/TerminalEntry.svelte';

describe('Terminal Entry ...', () => {
  it('should render help command', () => {
    render(TerminalEntry, { command: 'help' });

    expect(screen.getByText(/help$/)).toBeInTheDocument();
    expect(
      screen.getByText('No command other than', {
        exact: false
      })
    ).toBeInTheDocument();
  });

  it('should render unknown command', () => {
    render(TerminalEntry, { command: 'foobar' });

    expect(screen.getByText(/foobar$/)).toBeInTheDocument();
    expect(
      screen.getByText('Unknown command', {
        exact: false
      })
    ).toBeInTheDocument();
  });
});
