import mongoose from 'mongoose';
import express from 'express';
import routes from './routes/index.js'
import {} from 'dotenv/config'
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(routes)


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'Delta'
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
	console.log(`Running on PORT ${PORT}`);
})
