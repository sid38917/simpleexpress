const express = require('express')
const app = express()
const PORT = 4000
const router = require('./routes/index')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

app.use(express.urlencoded ({
    extended: false
}))
app.use(cors())


const uri = "mongodb+srv://sid38917:sid786786@cluster0.7qpjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uriLocal = 'mongodb://localhost:27017/myapp'

app.use(express.json())


mongoose.connect(uriLocal, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('connected to database')
    app.use(router)
})


app.listen(PORT, () => {
    console.log('Server is running on port = ', PORT);
})


