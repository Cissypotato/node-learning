const http = require('http')

const server = http.createServer((request, response) => {


    response.setHeader('content-type','text/html;charset=utf-8')
    const {method}=request
    const {pathname}=new URL(request.url,'http://127.0.0.1:4160')

    if (method === 'GET') {
        if (pathname === '/login') {
            response.end('hello,登录页面')
        } else if (pathname === '/reg') {
            response.end('hello,注册页面')
        }
    }else{
        response.end('hello,the fuck world')
    }
})

server.listen(4160, () => {
    console.log('the world server is active')
})