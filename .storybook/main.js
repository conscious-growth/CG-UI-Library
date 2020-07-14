module.exports = {
    webpackFinal: (config) => {
        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', {
                loader: 'less-loader', options: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            }],
        });
        return config
    }
}