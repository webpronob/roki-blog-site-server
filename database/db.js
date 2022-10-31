const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://pronob:Yk8AA6lpYuxEYaGV@cluster0.hsiic0e.mongodb.net/?retryWrites=true&w=majority`)

    console.log(`MongoDB Connected: `)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB