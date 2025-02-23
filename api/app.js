const express = require('express')
const ccors = require('cors')

const app = express()

app.use(cors())


// Handler for root endpoints '/' which is basically the root endpoint
app.get('/', (req,res) =>{
    res.json([
        {
            "id":"1",
            "title": "Book Review: The Bear ^ the Nightingale"
        },
        {
            "id":"2",
            "title": "Game Review: Pokemon Brillian Diamond"
        },
        {
            "id":"3",
            "title": "Show Review: Alice in Borderland"
        }
    ])
})

app.listen(4000, () => {
    console.log('listening for request on port 4000')
})