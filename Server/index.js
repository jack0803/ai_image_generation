import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/Connect.js';
import aiIRoutes from './routes/ai-iRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config(); 

const app = express();
//middleware 
app.use(cors());
app.use(express.json({ limit: '50mb'}));
app.use('/api/v1/post' , postRoutes);
app.use('/api/v1/aii' , aiIRoutes);

//routes
app.get('/' , async (req , res) => {
    res.send('hello AI-I');
})

const startServer = async() => {
    try { 
        connectDB(process.env.MONGODB_URL)
        app.listen(3000 , () => console.log('Server started on port http://loaclhost:3000'))
    } catch (error) {
        console.log(error);
    }
}

startServer();