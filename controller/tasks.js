const Task=require('../models/Task');

const getAllTask =async (req,res)=>{
        try{
                const tasks= await Task.find({})
                res.status(200).json({tasks});
        }catch(error){
                res.status(401).json({msg:error});
        }
}

const addNewTask=async (req,res)=>{
        try{
                const newTask=await Task.create(req.body);
                res.status(201).json({newTask});
        } catch(error){
                res.status(401).json({msg:error});
        }
}

const getTask=async (req,res)=>{
        try{
                const task=await Task.findOne({_id:req.params.id});
                if(task)
                        res.status(201).json({task});
                else
                        return res.status(404).json({msg:`Id not found: ${req.params.id}`});
        } catch(error){
                res.status(400).json({msg:error}); 
        }
}

const updateTask=async (req,res)=>{
        const{id:taskId}=req.params //naming the object id with some other name 
        try{
                const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
                        new:true,
                        runValidators:true});
                if(task)
                        res.status(201).json({task});
                else
                        return res.status(404).json({msg:`Id not found: ${taskId}`});
        } catch(error){
                res.status(400).json({msg:error}); 
        }
}

const deleteTask=async(req,res)=>{
        try{
                const task=await Task.findOneAndDelete({_id:req.params.id});
                if(task)
                        res.status(201).json({msg:`Task Deleted with id:${req.params.id}`});
                else
                        return res.status(404).json({msg:`Id not found: ${req.params.id}`});
        }catch(err){
                res.status(400).json({msg:error});
        }
}

module.exports={getAllTask, addNewTask, 
    getTask, updateTask, deleteTask}