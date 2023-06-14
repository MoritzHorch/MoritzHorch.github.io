import CareerCommand from '@/components/commands/CareerCommand.svelte';
import { render, screen } from '@testing-library/svelte';

describe('Career Command ...', () => {
  it('should render career command', () => {
    render(CareerCommand);

    expect(screen.getByText('@DHBW', { exact: false })).toBeInTheDocument();
  });
});
