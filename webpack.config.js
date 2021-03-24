const PATH = module.require('path');

//entry -> output

module.exports = {
    entry: './src/app.js',
    output: {
        path: PATH.join(__dirname, 'public/'),
        filename:'bundle.js'
    }
};