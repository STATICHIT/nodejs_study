//1.导入expres
const express = require('express')
//2.创建web服务器
const app = express();
//4，监听客户端的get和post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
  //使用express提供的res.send()方法，向了客户端响应一个JSON对象
  res.send({name:"gzy",age:20,gender:"男"})
})
app.post('/user',(req,res)=>{
  //使用使用express提供的res.send()方法，向了客户端响应一个文本字符串
  res.send("请求成功")
})
app.get('/',(req,res)=>{
  //通过req.query可以获取到客户端发送过来的查询参数
  //注意：默认情况下，req.query是一个空对象
  console.log(req.query)
  res.send(req.query)
})
//注意，这里的：id是一个动态参数
app.get('/user/:id',(req,res)=>{
  //req.params是动态匹配到的URL参数，默认也是一个空对象
  console.log(req.params)
  res.send(req.params)
})
//3.启动web服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})