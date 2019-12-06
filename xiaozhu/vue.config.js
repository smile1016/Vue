const postcsspxtorem = require('postcss-px-to-viewport')
const path = require('path')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://wirelesspub.xiaozhu.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
   
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    new postcsspxtorem({
                        unitToConvert: 'px',
                        viewportWidth: 375,
                        unitPrecision: 3,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: [/node_modelus/],
                        landscape: false,
                        landscapeUnit: 'vw',
                        landscapeWidth: 568
                    })
                ]
            }
        }
    },
    
}