import { merge } from 'lodash';
import { IConfig } from 'umi-types';
const assetDir = 'static'

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
  ],
  chainWebpack(config, { webpack }) {
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

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        const newOptions = {
          ...options,
          name: assetDir + "/[name].[hash:8].[ext]",
          fallback: {
            // ...options.fallback,
            options: {
              name: assetDir + "/[name].[hash:8].[ext]",
              esModule: false,
            },
          },
        };
        return newOptions;
      });
  }
}

export default config;
