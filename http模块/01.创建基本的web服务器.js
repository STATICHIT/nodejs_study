//1.导入http模块
const http=require('http')

//2.创建web服务器实例
const server = http.createServer()

//3.为服务器实例绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
  console.log("有人访问了")
  //解决乱码问题
  res.setHeader('Content-Type','text/html; charset=utf-8')
  res.end("哈哈哈让师傅"+req.method)
})
//4.启动服务器
server.listen(80,()=>{
  console.log("服务器跑在"+'http://127.0.0.1'+"起来了")
})