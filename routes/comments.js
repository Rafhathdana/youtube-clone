import express from "express"
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyTocken } from "../verifyTocken.js";

const router = express.Router()
router.post("/", verifyTocken, addComment)
router.delete("/:id", verifyTocken, deleteComment)
router.get("/:videoId",getComments)

export default router;