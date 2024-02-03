const express = require('express')
const app = express()

//在这里，调用express.static()方法，快熟的对外提供静态资源
app.use('/aa',express.static('./nodejs入门'))

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})