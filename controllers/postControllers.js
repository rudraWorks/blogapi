import Post from "../models/Post.js"
import mongoose ,{Mongoose, mongo} from "mongoose"

export const getAllPosts = async (req,res) =>{
    res.json({msg:"this is post"})
}

export const getPost = async (req,res) =>{

    let {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({error:'post does not exist'})
    try{
        const post = await Post.findById('64907a582c7327f3d30122fd')
        if(!post)  return res.status(404).json({error:'post does not exist'})
        res.status(200).json(post)
    } 
    catch(e){ 
        res.status(400).json({error:e.message})  
    } 
}

export const createPost = async (req,res) =>{
    const {date,title,content} = req.body 
    try{
        const post = await Post.create({date,title,content})
        res.status(200).json(post)
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

export const deletePost = async (req,res) =>{
    const {id} = req.params
    try{ 
        const p = await Post.findByIdAndDelete(id)
        res.status(200).json({message:'successfully deleted'})  
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

export const updatePost = async (req,res) =>{
    res.json({msg:'update a post'})
}