import { test, expect } from '@playwright/experimental-ct-svelte';

import index from '../src/routes/index.svelte';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(index);
  await expect(component).toContainText('Hello world');
});
