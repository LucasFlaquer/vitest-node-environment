import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environmentMatchGlobs: [['__tests__/e2e/**', 'database']],
  },
})
