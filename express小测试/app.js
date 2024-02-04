const express = require('express')//导入express
const cors = require('cors')//导入cors中间件
const session = require('express-session')//导入session中间件
const apiRouter = require('./apiRouter.js')// 导入路由模块
const expressJWT = require('express-jwt')//导入用于将Token还原成JSON对象的包
const secretKey = 'STATICHIT 666 ovo'//定义secert密钥
//创建服务器实例
const app = express()
app.use(session({
  secret: 'statichit',    //secret属性的值可以为任意字符串
  resave: false,          //固定写法
  saveUninitialized: true //固定写法
}))

//注册express内置中间件：urlencoded(注意中间件注册要放在路由前面)
app.use(express.urlencoded({ extended: false }))
//注册cors中间件
app.use(cors())

app.use(
  expressJWT.expressjwt({
    secret: secretKey,
    algorithms: ['HS256']
  })
)//要写在路由模块前面！！！！！！！！！

//注册路由模块
app.use('/api', apiRouter)

//使用全局错误处理中间件，捕获解析JWT失败后产生的错误
app.use((err, req, res, next) => {
  //这次错误是token解析失败导致的
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: "无效的token"
    })
  }
  res.send({
    status: 500,
    message: "未知错误"
  })
})
//启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})