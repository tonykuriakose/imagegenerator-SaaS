import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 2999
const app = express();
await connectDB()

app.use(express.json())
app.use(cors())


app.get('/', (req,res) => res.send("API Working"));
app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);

app.listen(PORT, () => console.log('Server running on port ' + PORT));