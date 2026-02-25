import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DBconnect from './config/db.js'
import movieRoute from './routes/userRoute.js'


dotenv.config()

DBconnect()
const PORT = process.env.PORT || 3000

const UserDetails = express()

UserDetails.use(cors())
UserDetails.use(express.json())
UserDetails.use("/api/UserDetails",movieRoute)

UserDetails.listen(PORT,()=>{
    console.log(`Server is On : http://localhost:${PORT}`);
})

//  http://localhost:5000//api/UserDetails