import { createError } from "../error"

export const update = (req,res,next) => {
    if(req.params.id === req.user.id){

    }else{
        return next(createError(403,"you can only update your account"))
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