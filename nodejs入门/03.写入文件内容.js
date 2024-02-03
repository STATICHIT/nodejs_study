const fs = require('fs')

fs.writeFile('./files/2.txt', "helle Nodejs", (err) => {
  // console.log(err)
  if(err){
    return console.log("文件写入失败！",err.message)
  }
  console.log("文件写入成功！")
})
//写入成功时，err的值为null
//写入失败时，err的值为一个错误对象