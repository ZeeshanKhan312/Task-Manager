const express=require('express');
const router=express.Router();

const {getAllTask, addNewTask, 
    getTask, updateTask, deleteTask}=require('../controller/tasks');

router.route('/tasks').get(getAllTask).post(addNewTask);
router.route('/tasks/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports=router;