const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.method); //GET
    // console.log(req.url); // */about

    console.log('user hit the server');

    const url = req.url;
    if (url === '/'){ //HOME PAGE
        res.writeHead(200, {'content-type': 'text/html'}) // *text/plain
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (url === '/about'){ // ABOUT PAGE
        res.writeHead(200, {'content-type': 'text/html'}) // *text/plain
        res.write('<h1>About Page</h1>')
        res.end()
    }else{ //404
        res.writeHead(404, {'content-type': 'text/html'}) // *text/plain
        res.write('<h1> Page not found</h1>')
        res.end()
    }
    
    
    

})

server.listen(5000)