//1.导入http模块
const http = require('http')

// const url=require('url')

//2.创建服务对象
const server = http.createServer((request, reponse) => {
    /**提取http报文内容 */
    // //获取请求方法
    // console.log(request.method)  //GET
    // //获取请求url
    // console.log(request.url)//  得到的是 请求路径
    // //获取请求版本号
    // console.log(request.httpVersion) // 1.1
    // //获取请求头
    // console.log(request.headers)//是个对象

    // /**获取请求体内容*/
    // let body = ''
    // request.on('data', chunk => {
    //     body += chunk
    // })
    // request.on('end', () => {
    //     console.log(body) //username=cccc&password=1111  
    //     reponse.end('hello the terrible world')
    // })

    /**获取请求路径请求参数url模块版*/
    // const res=url.parse(request.url,true)
    // console.log('res',res)//是个对象
    // console.log(res.pathname) //  /search
    // console.log(res.query)//  { name: '77' }
    /**获取请求路径请求参数url实例版*/
    // const url =new URL(request.url,'http://127.0.0.1:4160')
    // console.log(url.pathname) //  /search
    // console.log(url.searchParams.get('name')) // 77

    /**设置响应报文*/
    //设置响应码
    reponse.statusCode = 203
    //设置响应消息 一般不用设置，默认返回响应码对应的响应消息
    reponse.statusMessage = 'bang'
    //设置响应头 以key-value的形式 
    reponse.setHeader('content-type', 'text/html;charset=utf-8')//解决中文乱码问题
    //自定义响应头
    // reponse.setHeader('my-hearder', 'fuck the world')
    //重复设置,将value设置为数组
    reponse.setHeader('my-hearder', ['I love front-end','fuck the world'])

    //设置响应体 write和end都可以设置，write可以重复设置，会拼接在一起；一般write设置了，end就不设置了，如果两个都设置了会拼接在一起
    reponse.write('hello')
    reponse.write('小狗')
    reponse.end()
})

//3.监听端口，启动服务
server.listen(4160, () => {
    console.log('the world server is active')
})