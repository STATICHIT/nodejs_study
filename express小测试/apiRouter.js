//路由模块
const express = require('express')
const apiRouter = express.Router()

const jwt = require('jsonwebtoken')//导入用于生成JWT字符串的包
const secretKey = 'STATICHIT 666 ovo'//定义secert密钥

// expressJWT.expressjwt({ secret: secretKey, algorithms: ['HS256'] })
// expressJWT.expressjwt({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: '/^\/api\//' })

//编写get接口
apiRouter.get('/get', (req, res) => {
  //1.获取到客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  //2.调用res.send()方法，把数据响应给客户端
  res.send({
    status: 0,           //状态：0，表示成功；1，表示失败
    msg: 'GET请求成功！', //状态描述
    data: query          //需要响应给客户端的具体数据
  })
})

//编写post接口
apiRouter.post('/post', (req, res) => {
  //1.获取到客户端通过查询字符串，发送到服务器的URL-encoded数据
  const body = req.body
  //2.调用res.send()方法，把数据响应给客户端
  res.send({
    status: 0,           //状态：0，表示成功；1，表示失败
    msg: 'POST请求成功！', //状态描述
    data: body          //需要响应给客户端的具体数据
  })
})

//编写delete接口
apiRouter.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功！',
  })
})

//登陆的API接口
apiRouter.post('/login', (req, res) => {
  //判断用户提交的登录信息是否正确
  if (req.body.username != 'admin' || req.body.password != '000000') {
    return res.send({ status: 1, msg: "登陆失败" })
  }

  // //将登陆成功后的用户信息，保存到Session中
  // //注意：只有成功配置了express-session这个中间件之后，才能狗通过req点出来session这个属性
  // req.session.user = req.body//用户信息
  // req.session.isLogin = true//用户登陆状态
  // console.log("session：", req.session)
  // res.send({
  //   status: 0,
  //   msg: '登陆成功',
  //   username: req.session.user.username,
  // })

  console.log("SS", req.body.username)
  const tokenStr = jwt.sign({ user: req.body.username }, secretKey, { expiresIn: '3000s' })
  res.send({
    status: 0,
    msg: '登陆成功',
    token: tokenStr//要发送给客户端的token字符串
  })
})

//退出登陆的API接口
apiRouter.post('/logout', (req, res) => {
  //清空Session信息
  res.session.destroy()//调用req.session.destory()函数，即可清空服务器保存的session信息。
  console.log("session：", req.session)
  res.send({
    status: 0,
    msg: '退出登陆成功',
  })
})

//权限接口
apiRouter.post('/admin/jwt', (req, res) => {
  const auth = req.auth
  res.send({
    status: 0,
    msg: '权限接口测试成功',
    data: auth
  })
})
module.exports = apiRouter