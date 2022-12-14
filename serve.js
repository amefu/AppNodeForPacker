const http = require('http')
const server = http.createServer(onRequest)
const port = 8080
const fs = require('fs')

server.listen(port, ()=>{
  console.log(`Servidor corriendo en el puerto ${port}`)
})

function onRequest(req,res){
  fs.readFile('index.html', (err,content)=>{
    res.setHeader('Content-type','text/html')
    res.write(content)
    res.end()
  })
}