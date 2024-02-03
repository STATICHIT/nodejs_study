const fs = require('fs')

fs.readFile('./files/1.txt','utf-8',(err,resStr)=>{
  if(err){
    return console.log("文件读取失败！",err.message)
  }
  console.log("文件读取成功~",resStr)
})