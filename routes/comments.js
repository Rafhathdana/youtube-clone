import express from "express"
import { deleteComment, getComments } from "../controllers/comment.js";
import { verifyTocken } from "../verifyTocken.js";

const router = express.Router()
router.post("/", verifyTocken, addComments)
router.delete("/:id", verifyTocken, deleteComment)
router.get("/:videoid",getComments)

export default router;