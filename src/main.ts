import 'src/app.css';
import App from 'src/App.svelte';

const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: document.getElementById('app')!
});

export default app;
