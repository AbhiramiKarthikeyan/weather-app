// import json-server
const jsonServer = require('json-server')

//create json server using json-server library
const MPServer = jsonServer.create()

// set up path/route for db.json file
const router=jsonServer.router('db.json')

const middleware  =jsonServer.defaults()


//set up port for server app
const port = 4000 || process.env.PORT

//use middle ware and router in server
MPServer.use(middleware)
MPServer.use(router)


//server listen for request from frontend
MPServer.listen(port,()=>{
    console.log(`Media Player Server started at port: ${port}, and waiting for request!!!`);
})