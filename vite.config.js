import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ nodePolyfills(),react()],
  // resolve: {
  //   alias: {
  //       process: "process/browser",
  //       buffer: "buffer",
  //       crypto: "crypto-browserify",
  //       stream: "stream-browserify",
  //       assert: "assert",
  //       http: "stream-http",
  //       https: "https-browserify",
  //       os: "os-browserify",
  //       url: "url",
  //       util: "util",
  //   },
  server: {
    port: 5173,
  },
  // resolve: {
  //   alias: [{ find: '@', replacement: '/src' }],
  // },
  // define: {
  //   // global: 'window',
  //   // Buffer: Buffer,
  //   // process: process,
  
  // }
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util'
    }
  }
})
