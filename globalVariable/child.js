//在另一个文件中引入index.js,并且使用name，age和name1
require('./index')
console.log(global.name) //cc
console.log(global.age)//19
//直接使用也可以
console.log(name)//cc
console.log(age)//19
console.log(name1) //报错：ReferenceError: name1 is not defined