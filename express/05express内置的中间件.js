const express = require('express')
const app = express()

//除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
app.use(express.json())
app.use(express.urlencoded({extends:false}))

app.post('/user', (req, res) => {
  //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
  //默认情况下，如果并配置解析表单数据中间件，则req.body默认等于undefined
  console.log(req.body)
  res.send('ok.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
}) 