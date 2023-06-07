import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})