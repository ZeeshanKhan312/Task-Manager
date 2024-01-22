const express=require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());
const taskRouter=require('./routes/task-route');
app.use('/app/v1',taskRouter);

console.log("hello world");
app.listen(3000)