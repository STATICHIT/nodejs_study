const express = require('express')
const router = require('./04.router')//导入路由模块
const app = express()

app.use('/api',router)//注册路由模块，并添加同意的访问前缀/api
//注意：app.user()的作用，就是来注册全局中间件
app.listen(80, () => {
  console.log('http://127.0.0.1')
})