import { defineConfig, loadEnv } from 'vite'
// import { getStyleguideColors } from '../zeplin'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      PERSONAL_ACCESS_TOKEN: env.VITE_PERSONAL_ACCESS_TOKEN,
      WORKSPACE_ID: env.VITE_WORKSPACE_ID,
      STYLEGUIDE_ID: env.VITE_STYLEGUIDE_ID
    }
  }
})

let colors;

// Promise.resolve(getStyleguideColors()).then(result => colors = result);

module.exports = {
  WORKSPACE_ID
}