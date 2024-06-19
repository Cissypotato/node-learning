//1.导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')


const mimes = {//常见的媒体格式
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

const root = __dirname + '/src'
const server = http.createServer((request, reponse) => {
    const {
        pathname
    } = new URL(request.url, 'http://127.0.0.1')
    const filePath = root + pathname
    fs.readFile(filePath, (err, data) => {
        if (err) {
            reponse.statusCode = 500
            reponse.end('not found')
            return
        }
        const type=path.extname(filePath).slice(1)//获取资源后缀
        if(mimes[type]){//通过后缀匹配对应的资源类型
            reponse.setHeader('content-type',mimes[type])
        }else{//如果没匹配到设置通用类型,浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 下载 效果
            reponse.setHeader('content-type','application/octet-stream')
        }
        reponse.end(data)
    })

})
server.listen(4160, () => {
    console.log('the world server is active')
})