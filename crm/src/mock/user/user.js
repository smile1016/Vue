import Mock from 'mockjs'
Mock.setup({
    timeout:'200-600'
})
const User = {
    username: 'admin',
    password: '123456'
}

Mock.mock('/api/user/login', 'post', (options) => {
    console.log(options)
    let {username,password} = JSON.parse(options.body);
    if(username === User.username && password === User.password){
        return Mock.mock({
            code:1,message:'登陆成功'
        })
    }else{
        return Mock.mock({
            code:0,message:'用户名或者密码错误'
        })
    }
   
})