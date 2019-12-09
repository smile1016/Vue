import Mock from 'mockjs'
//模拟数据返回对象
Mock.mock('/api/getProduct', 'get', {
    // @相当于random
    id: '@natural(10,20)', //模拟随机10-20以内的自然数
    name: '@word()', //返回单词
    price: '@float(10,100)',
    img: "@image('300X250','#111','#fff','gp16')" //返回随机图片,图片颜色要使用十六进制
})
//模拟根据ID返回数据
Mock.mock(/\/api\/getProductById\//, 'get', (options) => {
    console.log(options)
    let result = /\/api\/getProductById\/(\d+)/.exec(options.url)
    console.log(result)
    return Mock.mock({
        id: result[1],
        name: '@word()'
    })
})
// 模拟返回列表
Mock.mock('/api/getProductList', 'get', () => {
    return Mock.mock({
        code: 1,
        // 返回数组
        "data|3-6": [{
            // @相当于random
            id: '@natural(10,20)',
            name: '@word()', 
            price: '@float(10,100)',
            img: "@image('300X250','#111','#fff','gp16')",
            address: '@county(true)'
        }]
    })
})
// post返回信息
Mock.mock('/api/addProduct', 'post', (options) => {
    return Mock.mock({
        id: 1,
       message:'添加产品成功'
    })
})