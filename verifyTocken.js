import Jwt from "jsonwebtoken";
import { createError } from "./error.js"
export const verifyTocken = (req, res, next) => {
    const tocken = req.cookie.access_tocken
    if (!tocken) return next(createError(401,"you are not authenticated!"))
    jwt.verify(tocken,process.env.JWT,(err,user)=>{
        if(err)return next(createError(403,"Token is not valid!"))
        req.user =user;
        next()
    })
}