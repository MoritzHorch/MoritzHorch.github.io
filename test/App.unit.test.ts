import { render, screen } from '@testing-library/svelte';
import App from 'src/App.svelte';

describe('App ...', () => {
  it('should render content of banner', () => {
    render(App);

    const textFromBannerTxt = screen.getByText('Moritz Horch', {
      exact: false
    });

    expect(textFromBannerTxt).toBeInTheDocument();
  });
});
