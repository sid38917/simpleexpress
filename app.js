const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes/userRouter')

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

app.use(express.urlencoded ({
    extended: false
}))

const uri = "mongodb+srv://sid38917:sid786786@cluster0.7qpjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json())


mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('connected to database')
    app.use(router)
})


app.listen(PORT, () => {
    console.log('Server is running on port = ', PORT);
})


