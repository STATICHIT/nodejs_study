//导入fs模块，来操作文件
const fs=require('fs')

//调用fs.readFile()方法读取文件
fs.readFile('./files/1.txt','utf-8',(err,resStr)=>{
  console.log(err);
  console.log("----------");
  console.log(resStr);
})
//如果读取成功，err的值为null
//如果读取失败，err的值为错误对象，resStr的值为undefined