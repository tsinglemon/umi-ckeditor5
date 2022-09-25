import { defineConfig } from 'umi';
const path = require('path');
const fs = require('fs');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');


export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  postcssLoader: {
    postcssOptions: styles.getPostCssConfig({
      themeImporter: {
        themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
      },
      minify: true
    })
  },
  styleLoader: {

  },
  chainWebpack: config => {


    config.plugin('CKEditorWebpackPlugin').use(
      CKEditorWebpackPlugin,
      [{}]
    );
    config.module.rule('svg').exclude.add(path.join(__dirname, 'node_modules', '@ckeditor'));
    config.module.rule('css').exclude.add(path.join(__dirname, 'node_modules', '@ckeditor'));


    config.module
      .rule('cke-svg')
      .test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
      .use('raw-loader')
      .loader('raw-loader');


    const ckeCss = config.module.rule('cke-css').test(/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/);
    ckeCss
      .use('postcss-loader').loader('postcss-loader').options({
        postcssOptions: styles.getPostCssConfig({
          themeImporter: {
            themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
          },
          minify: true
        })
      })

    // fs.writeFileSync('./webpack.js', config.toString());


  }
});
