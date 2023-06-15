import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import App from '@/App.svelte';

describe('App ...', () => {
  it('should not render input when not yet initialized', () => {
    render(App, { terminalInitialized: false });

    expect(screen.queryByTestId('terminal-input')).not.toBeInTheDocument();
  });

  it('should not render input when intro is still running', () => {
    // valid option: https://github.com/testing-library/svelte-testing-library/blob/main/src/pure.js#L16
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    render(App, { intro: true });

    expect(screen.queryByTestId('terminal-input')).not.toBeInTheDocument();
  });

  it('should render termnial entry given by cleaned terminal input', async () => {
    const user = userEvent.setup();
    render(App, { terminalInitialized: true });

    expect(screen.getByTestId('terminal-input')).toBeInTheDocument();

    await user.keyboard('  hELp {Enter}');

    expect(screen.getByText(/help$/)).toBeInTheDocument();
    expect(
      screen.getByText('about - a short introduction about myself', {
        exact: false
      })
    ).toBeInTheDocument();
  });
});
