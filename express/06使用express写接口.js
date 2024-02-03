//导入express
const express = require('express')
//创建服务器实例
const app = express()

//启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})