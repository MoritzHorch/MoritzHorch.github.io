import { render, screen } from '@testing-library/svelte';
import App from 'src/App.svelte';

describe('App ...', () => {
  it('should render content of banner', () => {
    render(App);

    expect(
      screen.getByText('Moritz Horch', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render command history entries after terminal is initialized', () => {
    render(App, { terminalInitialized: true });

    expect(screen.getByText('foo', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('bar', { exact: false })).toBeInTheDocument();
  });
});
