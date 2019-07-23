const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    // context: path.resolve(__dirname, '../'),
    // 入口，表示要使用 webpack 打包哪个文件
    entry: path.join(__dirname,'./src/main.js'),
    output: { // 输出文件相关的配置
        path: path.resolve(__dirname, 'dist'), // 指定打包好的文件 ，输出到哪个目录中去
        filename: 'main.js' // 指定输出的文件的名称
    },
    devServer: {
        open: true, // 自动打开浏览器
        contentBase: 'src', // 指定托管的根目录
        port: 8081, // 设置启动时的运行端口
        hot: true // 启用热更新 启用热更新第一步
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 表示这几个文件的后缀名可以省略不写
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 修改 vue 被导入时的包的路径
        }
    },
    module: { // 用于配置第三方模块加载器
        rules: [ // 所有第三方模块的匹配规则
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // exclude: /node_modules/
            },
            { // 转换 es6 的高级语法
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|jpeg|png|gif|bmp)$/,
                loader: 'url-loader'
                // ?limit=7632 limit给定的值是图片的大小，单位是byte，如果引用的图片是大于或等于limit值，则不会被转为base64格式的字符串，如果图片大小小于给定的limit值，则会被转为base64的字符串
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [ // 配置第三方插件
        new webpack.HotModuleReplacementPlugin(),//启用热更新第三步
        new htmlWebpackPlugin({ // 创建一个内存中生成的HTML页面插件
            template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' // 指定生成页面的名称
        })
    ]
}