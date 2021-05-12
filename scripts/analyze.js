process.env.NODE_ENV = 'production'

// noinspection NpmUsedModulesInstalled
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpackConfigProd = require('react-scripts/config/webpack.config')(
  'production'
)

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin())

webpack(webpackConfigProd, (err, stats) => {
  if (err || stats.hasErrors()) console.error(err)
})
