// HTTP module

const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }else if (req.url === '/about'){
        res.end('this is about page')
    }else{
        res.end(`
            <h1>Opps</h1>
            <p> We cant seem to find the page you are looking for</p>
            <a href ="/">back to home </a>`)
    }
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});