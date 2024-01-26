const express=require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());
const connectDB=require('./database/connect')
require('dotenv').config(); //for getting the datas from the .env file

const taskRouter=require('./routes/task-route');
app.use('/app/v1',taskRouter);



const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);

        app.listen(3000,()=>console.log('Listening to port 3000'));
    }
    catch(error){
        console.log(error);
    }
}

start();