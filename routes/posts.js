import { 
    getAllPosts,
    getPost,
    updatePost,
    deletePost,
    createPost
         } from "../controllers/postControllers.js";

import { Router } from "express";
 
const router = Router() 

router.get('/',getAllPosts)
router.get('/:id',getPost)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)

export default router