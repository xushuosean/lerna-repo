import { merge } from 'lodash';
import { IConfig } from 'umi-types';
const assetDir = 'static'
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/', 
      component: '../layouts/index',
      routes: [
        { path: '', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-repo',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   as(entry) {
    //     if (/\.css$/.test(entry)) return 'style';
    //     if (/\.woff$/.test(entry)) return 'font';
    //     if (/\.png$/.test(entry)) return 'image';
    //     return 'script';
    //   }
    // })
  ],
  // chunks: ['vendors', 'umi'],
  chainWebpack(config, { webpack }) {
    // 设置别名
    config.resolve.alias
      .set('@assets', resolve('./src/assets'))

    config.output
      .filename(assetDir + '/js/[name].[hash:8].js')
      .chunkFilename(assetDir + '/js/[name].[contenthash:8].chunk.js')

       // 修改css输出目录
    config.plugin("extract-css").tap(() => [
      {
        filename: `${assetDir}/css/[name].[contenthash:8].css`,
        chunkFilename: `${assetDir}/css/[name].[contenthash:8].chunk.css`,
        ignoreOrder: true,
      },
    ]);

    config
      .plugin('preload-webpack-plugin')
      .after('html-webpack-plugin')
      .use(PreloadWebpackPlugin, [ {
        rel: 'preload',
        as: 'script'
      }])

    // config
    //   .plugin('PreloadeWebpackPlugin')
    //   .after('html-webpack-plugin')
    //   .use(PreloadWebpackPlugin)
    //   .tap(() => [
    //     {
    //       rel: 'preload',
    //       as: ['umi']
    //     }
    //   ])
  }
}

export default config;
