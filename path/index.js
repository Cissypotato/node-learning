const path=require('path')

//注意：如果是windows系统的路径一定要加\转义
//1.basename 返回给定路径的最后一部分
console.log(path.basename('C:\\Users\\cc\\Desktop\\新建文件夹 (4)\\index.html') ) //index.html
console.log(path.basename('C:/Users/cc/Desktop/新建文件夹 (4)/index.html') )//index.html
//2.dirname 返回路径的目录名
console.log(path.dirname('C:\\Users\\cc\\Desktop\\新建文件夹 (4)\\index.html') ) //C:\Users\cc\Desktop\新建文件夹 (4)
//3.extname 返回路径的扩展名（eg：.htm1）;如果没有文件后缀名，返回空值;如果存在多个后缀名返回最后一个
console.log(path.extname('C:\\Users\\cc\\Desktop\\新建文件夹 (4)\\index.html') ) //.html
console.log(path.extname('C:\\Users\\cc\\Desktop\\新建文件夹 (4)\\index') ) //' '
console.log(path.extname('C:\\Users\\cc\\Desktop\\新建文件夹 (4)\\index.a.b.c.d') ) //'.d'
//4.join 拼接路径
console.log(path.join('/a','/b','/c')) //\a\b\c
//5.resolve 解析路径，返回绝对路径
//传入多个绝对路径返回最后一个
console.log(path.resolve('/a','/b','/c')) //G:\c
//只传入一个相对路径，返回(当前工作目录的绝对路径)
console.log(path.resolve('./index.js')) //G:\学习\前端\node\code\index.js  //当前工作目录，也就是终端执行的目录是/code
//传入一个绝对路径和一个相对路径，返回拼接后的绝对路径
console.log(path.resolve(__dirname ,'./index.js')) //G:\学习\前端\node\code\path\index.js //__dirname当前模块的目录名 //正确的index.js的绝对路径

//6.parse 解析路径，返回一个对象；format 解析对象，返回一个路径
console.log(path.parse('./index.js')) //{ root: '', dir: '.', base: 'index.js', ext: '.js', name: 'index' }
console.log(path.format({ root: '', dir: '.', base: 'index.js', ext: '.js', name: 'index' })) //'.\index'

//7.sep 返回操作系统的分割符；Windows：\;posix /
console.log(path.sep) // \






