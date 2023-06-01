import TerminalInput from '@/components/TerminalInput.svelte';
import { commandHistory } from '@/stores/commandHistory';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

vi.mock('@/stores/commandHistory', () => ({
  commandHistory: {
    update: vi.fn()
  }
}));

describe('Terminal Entry ...', () => {
  it('should render terminal input', () => {
    render(TerminalInput);

    expect(screen.getByText('$>')).toBeInTheDocument();
  });

  it('should sent commands to store', async () => {
    const user = userEvent.setup();
    render(TerminalInput);

    expect(commandHistory.update).not.toHaveBeenCalled();

    await user.keyboard('anything{Enter}');

    expect(commandHistory.update).toHaveBeenCalled();
  });
});
