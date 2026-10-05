import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Giobertox.github.io',
  base: '/avvocato-marco-rodeghiero',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
});
