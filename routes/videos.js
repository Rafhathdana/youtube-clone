import express from "express";
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import { verifyTocken } from "../verifyTocken.js";
const router = express.Router();

// create a video
router.post("/",verifyTocken,addVideo)
router.put("/:id",verifyTocken,updateVideo)
router.delete("/:id",verifyTocken,deleteVideo)
router.get("/find/:id",getVideo) 
export default router;