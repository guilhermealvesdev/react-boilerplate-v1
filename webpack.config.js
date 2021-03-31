const PATH = module.require('path');

//entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: PATH.join(__dirname, 'public/'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map', //Source map pros arquivos JS
    devServer: {
        contentBase: PATH.join(__dirname, 'public/')
    }
};