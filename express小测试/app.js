//导入express
const express = require('express')

//导入cors中间件
const cors=require('cors')

// 导入路由模块
const apiRouter = require('./apiRouter.js')

//创建服务器实例
const app = express()

//注册express内置中间件：urlencoded(注意中间件注册要放在路由前面)
app.use(express.urlencoded({ extended: false }))
//注册cors中间件
app.use(cors())
//注册路由模块
app.use('/api', apiRouter)

//启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})