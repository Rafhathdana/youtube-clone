import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyTocken } from "../verifyTocken.js";
const router = express.Router();

// create a video
router.post("/",verifyTocken,addVideo)
router.put("/:id",verifyTocken,updateVideo)
router.delete("/:id",verifyTocken,deleteVideo)
router.get("/find/:id",getVideo) 
router.put("/view/:id",addView) 
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",verifyTocken,sub)
router.get("/tags",getByTag)
router.get("/search",search)
export default router;