import path from 'path';
import webpack, { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import merge from 'webpack-merge';

import baseConfig, { isDev } from './base.config';

const getPlugins = () => {
  let plugins = [
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.ts"
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
    }),
  ];

  if (isDev)
    plugins = [
      ...plugins,
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } }),
    ];

  return plugins;
};

const config: Configuration = {
  devtool: isDev && 'eval-cheap-source-map',
  entry: isDev ? ['webpack-hot-middleware/client?reload=true', './src/client'] : './src/client',
  output: {
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: isDev ? '[id].js' : '[id].[contenthash].js',
    path: path.resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/',
  },
  optimization: { minimizer: [new CssMinimizerPlugin()] },
  plugins: getPlugins(),
};

export default merge(baseConfig(true), config);
