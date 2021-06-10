const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//功能已更新，与官网文档不同
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    //入口文件名称管理
    new HtmlWebpackPlugin({
      title: 'Output Management ok',
    }),
    //功能已更新，与官网文档不同
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      //css配置
      //安装了style-loader css-loader方可配置
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //图片和字体文件配置
      //安装了file-loader方可配置
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      //xml文件配置
      //安装了csv-loader xml-loader方可配置
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
}
