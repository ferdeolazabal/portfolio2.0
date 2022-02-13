const express = require('express')

const app = express()
const port = 3000

//servir contenido estatico
app.use( express.static ("public"))

app.get('/', (req, res) =>{
    res.sendFile( __dirname + '/public/index.html');
    })

app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
    })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
