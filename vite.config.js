import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    react({ jsxImportSource: '@emotion/react' }),
    react({ jsxRuntime: 'classic' }),
    react({
      babel: {
        presets: ["Fast Refresh"],
        // Your plugins run before any built-in transform (eg: Fast Refresh)
        plugins: [["@emotion/babel-plugin", { sourceMap: true }]],
        // Use .babelrc files
        babelrc: true,
        // Use babel.config.js files
        configFile: true,
      }
    }),
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    })
  ],
})