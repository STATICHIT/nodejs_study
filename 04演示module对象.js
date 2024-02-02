/*
 * @Author: STATICHIT 2394412110@qq.com
 * @Date: 2024-02-01 15:51:22
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2024-02-01 16:23:48
 * @FilePath: \study_nodejs\04演示module对象.js
 *使用require（）方法导入模块时，导入的结果，永远以module.exports指向的对象为准
 *为了简化向外共享成员的代码，Node提供了exports对象。
 *默认情况下，exports和module.exports指向同一个对象。
*/

const m=require('./05自定义模块')
console.log(m)