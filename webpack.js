const webpack = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  node: {
    setImmediate: false,
    module: 'empty',
    dns: 'mock',
    http2: 'empty',
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  output: {
    path: '/Users/jimmy/Desktop/myapp/dist',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    pathinfo: true,
    futureEmitAssets: true,
  },
  resolve: {
    symlinks: true,
    alias: {
      'react-router': '/Users/jimmy/Desktop/myapp/node_modules/react-router',
      'react-router-dom':
        '/Users/jimmy/Desktop/myapp/node_modules/react-router-dom',
      history: '/Users/jimmy/Desktop/myapp/node_modules/history-with-query',
      'regenerator-runtime':
        '/Users/jimmy/Desktop/myapp/node_modules/umi/node_modules/regenerator-runtime',
      react: '/Users/jimmy/Desktop/myapp/node_modules/react',
      'react-dom': '/Users/jimmy/Desktop/myapp/node_modules/react-dom',
      antd: '/Users/jimmy/Desktop/myapp/node_modules/antd',
      'antd-mobile': '/Users/jimmy/Desktop/myapp/node_modules/antd-mobile',
      dva: '/Users/jimmy/Desktop/myapp/node_modules/dva',
      '@': '/Users/jimmy/Desktop/myapp/src',
      '@@': '/Users/jimmy/Desktop/myapp/src/.umi',
      '@umijs/plugin-request/lib/ui':
        '/Users/jimmy/Desktop/myapp/node_modules/@umijs/plugin-request/lib/ui/index.js',
      umi: '/Users/jimmy/Desktop/myapp/node_modules/umi',
    },
    extensions: [
      '.web.js',
      '.wasm',
      '.mjs',
      '.js',
      '.web.jsx',
      '.jsx',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json',
    ],
    modules: [
      'node_modules',
      '/Users/jimmy/Desktop/myapp/node_modules/@umijs/bundler-webpack/node_modules',
    ],
  },
  module: {
    rules: [
      /* config.module.rule('js') */
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [['/Users/jimmy/Desktop/myapp']],
        exclude: [/node_modules/, /\.mfsu/],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/babel-loader/index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory:
                '/Users/jimmy/Desktop/myapp/src/.umi/.cache/babel-loader',
              presets: [
                [
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/babel-preset-umi/app.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true,
                    autoCSSModules: true,
                    svgr: true,
                    env: {
                      targets: {
                        chrome: 49,
                        firefox: 64,
                        safari: 10,
                        edge: 13,
                        ios: 10,
                      },
                    },
                    import: [
                      {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true,
                      },
                      {
                        libraryName: 'antd-mobile',
                        libraryDirectory: 'es',
                        style: true,
                      },
                    ],
                    noAnonymousDefaultExport: true,
                    reactRequire: false,
                    react: {
                      runtime: 'automatic',
                    },
                  },
                ],
              ],
              plugins: [
                [
                  '/Users/jimmy/Desktop/myapp/node_modules/react-refresh/babel.js',
                ],
              ],
            },
          },
        ],
      },
      /* config.module.rule('ts-in-node_modules') */
      {
        test: /\.(jsx|ts|tsx)$/,
        include: [/node_modules/],
        use: [
          /* config.module.rule('ts-in-node_modules').use('babel-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/babel-loader/index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory:
                '/Users/jimmy/Desktop/myapp/src/.umi/.cache/babel-loader',
              presets: [
                [
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/babel-preset-umi/app.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true,
                    autoCSSModules: true,
                    svgr: true,
                    env: {
                      targets: {
                        chrome: 49,
                        firefox: 64,
                        safari: 10,
                        edge: 13,
                        ios: 10,
                      },
                    },
                    import: [
                      {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true,
                      },
                      {
                        libraryName: 'antd-mobile',
                        libraryDirectory: 'es',
                        style: true,
                      },
                    ],
                    noAnonymousDefaultExport: true,
                    reactRequire: false,
                    react: {
                      runtime: 'automatic',
                    },
                  },
                ],
              ],
              plugins: [
                [
                  '/Users/jimmy/Desktop/myapp/node_modules/react-refresh/babel.js',
                ],
              ],
            },
          },
        ],
      },
      /* config.module.rule('js-in-node_modules') */
      {
        test: /\.(js|mjs)$/,
        include: [
          function () {
            /* omitted long function */
          },
        ],
        use: [
          /* config.module.rule('js-in-node_modules').use('babel-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/babel-loader/index.js',
            options: {
              sourceType: 'unambiguous',
              babelrc: false,
              cacheDirectory:
                '/Users/jimmy/Desktop/myapp/src/.umi/.cache/babel-loader',
              presets: [
                [
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/babel-preset-umi/dependency.js',
                  {
                    nodeEnv: 'development',
                    dynamicImportNode: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/url-loader/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
              esModule: false,
              fallback: {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
                options: {
                  name: 'static/[name].[hash:8].[ext]',
                  esModule: false,
                },
              },
            },
          },
        ],
      },
      /* config.module.rule('avif') */
      {
        test: /\.(avif)(\?.*)?$/,
        use: [
          /* config.module.rule('avif').use('file-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false,
            },
          },
        ],
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        exclude: ['/Users/jimmy/Desktop/myapp/node_modules/@ckeditor'],
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false,
            },
          },
        ],
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(eot|woff|woff2|ttf)(\?.*)?$/,
        use: [
          /* config.module.rule('fonts').use('file-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/file-loader/cjs.js',
            options: {
              name: 'static/[name].[hash:8].[ext]',
              esModule: false,
            },
          },
        ],
      },
      /* config.module.rule('plaintext') */
      {
        test: /\.(txt|text|md)$/,
        use: [
          /* config.module.rule('plaintext').use('raw-loader') */
          {
            loader:
              '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/raw-loader/cjs.js',
          },
        ],
      },
      /* config.module.rule('css') */
      {
        test: /\.(css)(\?.*)?$/,
        exclude: ['/Users/jimmy/Desktop/myapp/node_modules/@ckeditor'],
        oneOf: [
          /* config.module.rule('css').oneOf('css-modules') */
          {
            resourceQuery: /modules/,
            use: [
              /* config.module.rule('css').oneOf('css-modules').use('style-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/style-loader/cjs.js',
                options: {
                  base: 0,
                },
              },
              /* config.module.rule('css').oneOf('css-modules').use('css-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]',
                  },
                },
              },
              /* config.module.rule('css').oneOf('css-modules').use('postcss-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () {
                    /* omitted long function */
                  },
                  postcssOptions: {
                    plugins: [
                      {
                        postcssPlugin: 'postcss-import',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-importer',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-mixins',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-nesting',
                        Rule(e) {
                          S(e, n);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-logger',
                        Once(root) {
                          root.prepend(`/* ${root.source.input.file} */ \n`);
                        },
                      },
                      {
                        version: '8.4.16',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls((decl) =>
                                transform(opts, browsers, decl),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules((rule) =>
                                transform(hasAllBug, rule),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-longhand',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'css-declaration-sorter',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('css') */
          {
            use: [
              /* config.module.rule('css').oneOf('css').use('style-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/style-loader/cjs.js',
                options: {
                  base: 0,
                },
              },
              /* config.module.rule('css').oneOf('css').use('css-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                options: {
                  importLoaders: 1,
                },
              },
              /* config.module.rule('css').oneOf('css').use('postcss-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () {
                    /* omitted long function */
                  },
                  postcssOptions: {
                    plugins: [
                      {
                        postcssPlugin: 'postcss-import',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-importer',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-mixins',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-nesting',
                        Rule(e) {
                          S(e, n);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-logger',
                        Once(root) {
                          root.prepend(`/* ${root.source.input.file} */ \n`);
                        },
                      },
                      {
                        version: '8.4.16',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls((decl) =>
                                transform(opts, browsers, decl),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules((rule) =>
                                transform(hasAllBug, rule),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-longhand',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'css-declaration-sorter',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('less') */
      {
        test: /\.(less)(\?.*)?$/,
        oneOf: [
          /* config.module.rule('less').oneOf('css-modules') */
          {
            resourceQuery: /modules/,
            use: [
              /* config.module.rule('less').oneOf('css-modules').use('style-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/style-loader/cjs.js',
                options: {
                  base: 0,
                },
              },
              /* config.module.rule('less').oneOf('css-modules').use('css-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[local]___[hash:base64:5]',
                  },
                },
              },
              /* config.module.rule('less').oneOf('css-modules').use('postcss-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () {
                    /* omitted long function */
                  },
                  postcssOptions: {
                    plugins: [
                      {
                        postcssPlugin: 'postcss-import',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-importer',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-mixins',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-nesting',
                        Rule(e) {
                          S(e, n);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-logger',
                        Once(root) {
                          root.prepend(`/* ${root.source.input.file} */ \n`);
                        },
                      },
                      {
                        version: '8.4.16',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls((decl) =>
                                transform(opts, browsers, decl),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules((rule) =>
                                transform(hasAllBug, rule),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-longhand',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'css-declaration-sorter',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('css-modules').use('/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/less-loader/cjs.js') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/less-loader/cjs.js',
                options: {
                  modifyVars: {
                    'root-entry-name': 'default',
                  },
                  javascriptEnabled: true,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('css') */
          {
            use: [
              /* config.module.rule('less').oneOf('css').use('style-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/style-loader/cjs.js',
                options: {
                  base: 0,
                },
              },
              /* config.module.rule('less').oneOf('css').use('css-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/css-loader/cjs.js',
                options: {
                  importLoaders: 1,
                },
              },
              /* config.module.rule('less').oneOf('css').use('postcss-loader') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/postcss-loader/src/index.js',
                options: {
                  ident: 'postcss',
                  plugins: function () {
                    /* omitted long function */
                  },
                  postcssOptions: {
                    plugins: [
                      {
                        postcssPlugin: 'postcss-import',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-importer',
                        Once: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-mixins',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-nesting',
                        Rule(e) {
                          S(e, n);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ckeditor5-theme-logger',
                        Once(root) {
                          root.prepend(`/* ${root.source.input.file} */ \n`);
                        },
                      },
                      {
                        version: '8.4.16',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls((decl) =>
                                transform(opts, browsers, decl),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules((rule) =>
                                transform(hasAllBug, rule),
                              );
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-longhand',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            },
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'css-declaration-sorter',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () {
                              /* omitted long function */
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              /* config.module.rule('less').oneOf('css').use('/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/less-loader/cjs.js') */
              {
                loader:
                  '/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/less-loader/cjs.js',
                options: {
                  modifyVars: {
                    'root-entry-name': 'default',
                  },
                  javascriptEnabled: true,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('cke-svg') */
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: [
          /* config.module.rule('cke-svg').use('raw-loader') */
          {
            loader: 'raw-loader',
          },
        ],
      },
      /* config.module.rule('cke-css') */
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
          /* config.module.rule('cke-css').use('postcss-loader') */
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  {
                    postcssPlugin: 'postcss-import',
                    Once: function () {
                      /* omitted long function */
                    },
                  },
                  {
                    postcssPlugin: 'postcss-ckeditor5-theme-importer',
                    Once: function () {
                      /* omitted long function */
                    },
                  },
                  {
                    postcssPlugin: 'postcss-mixins',
                    prepare: function () {
                      /* omitted long function */
                    },
                  },
                  {
                    postcssPlugin: 'postcss-nesting',
                    Rule(e) {
                      S(e, n);
                    },
                  },
                  {
                    postcssPlugin: 'postcss-ckeditor5-theme-logger',
                    Once(root) {
                      root.prepend(`/* ${root.source.input.file} */ \n`);
                    },
                  },
                  {
                    version: '8.4.16',
                    plugins: [
                      {
                        postcssPlugin: 'postcss-discard-comments',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-minify-gradients',
                        OnceExit(css) {
                          css.walkDecls(optimise);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-reduce-initial',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-svgo',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-display-values',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-reduce-transforms',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-colormin',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-timing-functions',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-calc',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-convert-values',
                        OnceExit(css) {
                          css.walkDecls((decl) =>
                            transform(opts, browsers, decl),
                          );
                        },
                      },
                      {
                        postcssPlugin: 'postcss-ordered-values',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-minify-selectors',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-minify-params',
                        OnceExit(css) {
                          css.walkAtRules((rule) => transform(hasAllBug, rule));
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-charset',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-discard-overridden',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-string',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-unicode',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-minify-font-values',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-url',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-repeat-style',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-positions',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-normalize-whitespace',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-merge-longhand',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-discard-duplicates',
                        OnceExit(css) {
                          dedupe(css);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-merge-rules',
                        prepare: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'postcss-discard-empty',
                        OnceExit(css, { result }) {
                          discardAndReport(css, result);
                        },
                      },
                      {
                        postcssPlugin: 'postcss-unique-selectors',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'css-declaration-sorter',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                      {
                        postcssPlugin: 'cssnano-util-raw-cache',
                        OnceExit: function () {
                          /* omitted long function */
                        },
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /* config.plugin('define') */
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    /* config.plugin('progress') */
    new (require('/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/webpackbar/webpackbar.js'))(
      {},
    ),
    /* config.plugin('friendly-error') */
    new (require('/Users/jimmy/Desktop/myapp/node_modules/@umijs/deps/compiled/friendly-errors-webpack-plugin/index.js'))(
      {
        clearConsole: false,
      },
    ),
    /* config.plugin('case-sensitive-paths') */
    {},
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('fastRefresh') */
    new ReactRefreshPlugin({
      overlay: false,
      exclude: /node_modules/i,
      include: /\.([cm]js|[jt]sx?|flow)$/i,
    }),
    /* config.plugin('CKEditorWebpackPlugin') */
    new CKEditorWebpackPlugin({}),
  ],
  entry: {
    umi: ['/Users/jimmy/Desktop/myapp/src/.umi/umi.ts'],
  },
};
