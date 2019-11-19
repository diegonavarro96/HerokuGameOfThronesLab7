const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://Admin:Admin@cluster0-pkh4a.mongodb.net/Lab7?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true, //crear indexes
  useUnifiedTopology: true
})





