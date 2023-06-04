import AboutCommand from '@/components/commands/AboutCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('About Command ...', () => {
  it('should render about command', () => {
    render(AboutCommand);

    expect(
      screen.getByText('Hi! My name is Moritz Horch', { exact: false })
    ).toBeInTheDocument();
  });
});
