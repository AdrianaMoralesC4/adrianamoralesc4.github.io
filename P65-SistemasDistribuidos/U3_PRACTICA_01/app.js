const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) =>{
    res.json({
        data: "Node App"
    })
})

app.listen(3000, () => console.log('Listening on port 3000'))
