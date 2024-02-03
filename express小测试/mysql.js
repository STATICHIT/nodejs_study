//1.导入mysql
const mysql = require('mysql')
//2.建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1',     //数据库的IP地址
  user: 'root',          //登陆数据库的账号
  password: '123456',    //登陆数据库的密码
  database: 'nodejs_test'//指定操作的数据库
})

//检测mysql模块能否正常工作
db.query('SELECT * FROM user_info',(err,results)=>{
  //mysql模块工作期间报错了
  if(err)return console.log(err.message)
  //能够成功的执行SQL语句
  console.log(results)
})