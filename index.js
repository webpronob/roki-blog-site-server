
const express =require("express");
const app =express()
app.use(express.json());
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const connectDB =require('./database/db')

app.listen(5000,() =>{
    console.log("Server is running")
})

app.use('/api/post', require('./routes/postRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
// Yk8AA6lpYuxEYaGV
// pronob
connectDB()