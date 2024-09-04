import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from '../backend/routes/auth.routes.js';
import messageRoutes from '../backend/routes/message.routes.js';
import userRoutes from '../backend/routes/user.routes.js';
import connectDB from './db/db.js';


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{
   connectDB();
   console.log(`server running on port ${PORT}`);
})