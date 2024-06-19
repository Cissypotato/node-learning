function capture(){
    console.log('pray')
}

function howl(){
    console.log('miao~miao~')
}

// module.exports={
//     capture,
//     howl
// }

//等同于

exports.capture=capture
exports.howl=howl

//因为expots=module.exports={}，而require默认的是引进module.exports
//所以exports整个值改变列如：exports=123是不会对require的值起作用的