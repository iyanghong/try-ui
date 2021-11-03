/**
 * Created by yh on 2021/7/21
 */
const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBar = require('webpackbar');
const isProd = process.env.NODE_ENV === 'production';
let historyApiFallback = true;
if (isProd) {
    historyApiFallback = {
        rewrites: [{
            from: /\//,
            to: '/404.html'
        }]
    }
}
let webpackConfig = {
    entry: './examples/index.js',
    devServer: {
        hot: true,
        host: 'localhost',
        port: '6660',
        publicPath: process.env.PUBLIC_PATH || '/',
        // contentBase: './examples/dist',
        historyApiFallback
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(process.cwd(), './examples'),
            '@src': path.resolve(process.cwd(), './src')
        }
    },
    output: {
        path: path.resolve(process.cwd(), './examples/dist/'),
        publicPath: process.env.PUBLIC_PATH || '/',
        filename: '[name].[hash:7].js',
        chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(vue|jsx?)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [path.resolve(__dirname, '../src/theme/common/variables.scss'),]//一定是path.resolve的绝对路径
                        }
                    }
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                // todo: 这种写法有待调整
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './md-loader/index.js')
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackBar(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './examples/index.tpl',
            filename: './index.html',
            favicon: './examples/favicon.ico'
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': isProd ? config.env.production : config.env.development
        })
    ]
}

module.exports = webpackConfig;
