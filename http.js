const http = require('http')



const server = http.createServer(( req, res) =>{
    if(req.url === '/'){
        return res.end('Hello welcome to my home Page')
    }

    if (req.url === '/about'){
        return res.end('Here is our short History')
    }
    
     res.end(`<h1> Oops !</h1>
    <p> We can not find the page you are looking for</p>
    <a href ="/"> Back Home</a> ` )
    
    
   
    
        
})

server.listen(5000)