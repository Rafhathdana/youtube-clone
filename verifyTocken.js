import jwt from "jsonwebtoken";
import { createError } from "./error.js"
export const verifyTocken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401,"you are not authenticated!"))
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return next(createError(403,"Token is not valid!"))
        req.user =user;
        next()
    })
}