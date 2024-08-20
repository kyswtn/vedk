import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
  externals: ['vscode'],
  rollup: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },
})
