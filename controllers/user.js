import { createError } from "../error.js"
import User from "../models/User.js"

export const update = async (req,res,next) => {
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(
             req.params.id,
                {   $set:req.body
            },
            {  new: true}
            );
            res.status(200).json(updatedUser);
        }catch(err){
            next(err)
        }
    }else{
        return next(createError(403,"you can update only your account"))
    }
 }
export const deleteUser = (req,res,next) => {

 }
export const getUser = (req,res,next) => {

 }
export const subscribe = (req,res,next) => {

 }
export const unsubscribe = (req,res,next) => {

 }
export const like = (req,res,next) => {

 }
export const dislike = (req,res,next) => {

 }