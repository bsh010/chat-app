import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from '../backend/routes/auth.routes.js';
import messageRoutes from '../backend/routes/message.routes.js';
import userRoutes from '../backend/routes/user.routes.js';
import connectDB from './db/db.js';
import {app,server} from './socket/socket.js'; 
import path from 'path';

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3005;
const __dirname = path.resolve();

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})
server.listen(PORT,()=>{
   connectDB();
   console.log(`server running on port ${PORT}`);
})