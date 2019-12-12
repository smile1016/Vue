import Mock from 'mockjs';

Mock.setup({
  timeout: '200-600'
})

const User = {
  username: 'admin',
  password: '123456'
}


Mock.mock('/api/user/login', 'post', (options) => {
  console.log(options);
  let { username, password } = JSON.parse(options.body);
  if (username === User.username && password === User.password) {
    return Mock.mock({
      code: 1,
      message: "登录成功"
    })
  } else {
    return Mock.mock({
      code: 0,
      message: "用户名或者密码错误"
    })
  }
})


Mock.mock('/api/user/logout', 'get', () => {
  console.log('11')
  //删除session
  //删除cookie
  return Mock.mock({
    code: 1,
    message: '退出登录成功'
  })
})


var Users = [];

function InitUserData() {
  for (let i = 0; i < 66; i++) {
    let params = Mock.mock({
      id: "@increment()",
      name: "@cname()",
      sex: "@natural(0,1)",
      age: "@natural(1,100)",
      birthday: "@date()",
      address: "@county(true)"
    })
    Users.push(params);
  }
}
InitUserData();


Mock.mock('/api/user/list', 'post', (options) => {
  let { name, pagesize, pageno } = JSON.parse(options.body);

  //查询
  let userlist = Users.filter((user) => {
    return user.name.indexOf(name) > -1;
  })
  console.log(userlist);

  //分页
  let startIndex = (pageno - 1) * pagesize;
  let endIndex = startIndex + pagesize;
  let tempUsers = userlist.slice(startIndex, endIndex);
  return {
    code: 1,
    total: userlist.length,
    list: tempUsers
  }
})


Mock.mock('/api/user/del', 'post', function (options) {
  console.log(options);
  let id = JSON.parse(options.body).id;
  Users.forEach((user, index) => {
    if (user.id === id) {
      Users.splice(index, 1);
    }
  })

  return {
    code: 1,
    message: '删除数据成功'
  }
})


Mock.mock('/api/user/add', 'post', (options) => {
  let user = JSON.parse(options.body);
  user.id = Users.length + 1
  Users.push(user);
  return {
    code: 1,
    message: "用户添加成功"
  }
})


Mock.mock('/api/user/update', 'post', (options) => {
  let user = JSON.parse(options.body);
  console.log(user);
  Users.forEach((item, index) => {
    if (item.id === user.id) {
      Users[index] = user;
    }
  })
  return {
    code: 1,
    message: "用户修改成功"
  }
})

Mock.mock('/api/user/batchdel', 'post', (options) => {
  let ids = JSON.parse(options.body);
  for (let i = 0; i < ids.length; i++) {
    for (let j = Users.length - 1; j > -1; j--) {
      if (ids[i] === Users[j].id) {
        Users.splice(j, 1)
      }
    }
  }

  return {
    code: 1,
    message: "批量删除成功"
  }

})