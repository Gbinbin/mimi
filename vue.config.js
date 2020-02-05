module.exports = {
    devServer: {
        proxy: { //反向代理
            'api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}