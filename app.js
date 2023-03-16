const express = require('express')
const sendmail = require('./mail')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.get('/', (req, res) => {
  res.send("Am working!!")
})
app.get('/mail', sendmail)

const start = async() =>{
     try {
        app.listen(port,hostname,()=>{
            console.log(`Server running at http://${hostname}:${port}/`);
         });
    }
      catch (error) {
        console.log(error)
     }
}
start();