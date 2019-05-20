module.exports = {
    entry: './src/app.js',
    output:{
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    mode: 'none',
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    // externals: {
    //     jquery: 'jQuery'
    // }
}