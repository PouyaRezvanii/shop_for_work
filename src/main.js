const app = require('./app')
const mongoose = require('mongoose');

 mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(3000, () => {
        console.log("server is up and running on port 3000")
    })


}).catch(err => {
    if(err) throw new Error('Database connection failed')
})