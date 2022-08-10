import { render, screen } from '@testing-library/svelte';
import App from '../src/App.svelte';

describe('App ...', () => {
  it('should render Hello World', () => {
    render(App);

    const helloWorldText = screen.queryByText('Hello World');

    expect(helloWorldText).toBeInTheDocument();
  });
});
