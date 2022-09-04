import { render, screen } from '@testing-library/svelte';
import App from '@/App.svelte';

describe('App ...', () => {
  it('should not render input when not yet initialized', () => {
    render(App, { terminalInitialized: false });

    expect(screen.queryByTestId('terminal-input')).not.toBeInTheDocument();
  });

  it('should render termnial entry given by terminal input', () => {
    render(App, { terminalInitialized: true });

    expect(screen.queryByTestId('terminal-input')).toBeInTheDocument();
  });
});
