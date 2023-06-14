import { render, screen } from '@testing-library/svelte';
import TerminalEntry from '@/components/TerminalEntry.svelte';

describe('Terminal Entry ...', () => {
  it.each([
    ['help', 'about - a short introduction about myself'],
    ['about', 'Hi! My name is Moritz Horch'],
    ['skills', 'Java'],
    ['career', '@DHBW'],
    ['foo', 'Unknown command']
  ])('should render command %s', (command, output) => {
    render(TerminalEntry, { command });

    expect(screen.getByText(new RegExp(`${command}$`))).toBeInTheDocument();
    expect(
      screen.getByText(output, {
        exact: false
      })
    ).toBeInTheDocument();
  });
});
