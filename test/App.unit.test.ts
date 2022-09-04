import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import App from '@/App.svelte';

describe('App ...', () => {
  it('should not render input when not yet initialized', () => {
    render(App, { terminalInitialized: false });

    expect(screen.queryByTestId('terminal-input')).not.toBeInTheDocument();
  });

  it('should render termnial entry given by terminal input', async () => {
    const user = userEvent.setup();
    render(App, { terminalInitialized: true });

    expect(screen.getByTestId('terminal-input')).toBeInTheDocument();

    await user.keyboard('help{Enter}');

    expect(screen.getByText(/help$/)).toBeInTheDocument();
    expect(
      screen.getByText('No command other than help exists.')
    ).toBeInTheDocument();
  });
});
