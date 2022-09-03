import { render, screen } from '@testing-library/svelte';
import TerminalBanner from '@/components/TerminalBanner.svelte';

describe('Terminal Banner ...', () => {
  it('should render content of given .txt file', () => {
    render(TerminalBanner);

    expect(screen.getByText('Moritz Horch', { exact: false }));
  });
});
