import { render, screen } from '@testing-library/svelte';
import TerminalEntry from '@/components/TerminalEntry.svelte';

vi.mock('@/commands', () => ({
  runCommand: vi.fn().mockReturnValue('evaluated output')
}));

describe('Terminal Entry ...', () => {
  it('should render terminal entry', () => {
    render(TerminalEntry, { command: 'foo' });

    expect(screen.getByText('foo', { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText('evaluated output', { exact: false })
    ).toBeInTheDocument();
  });
});
