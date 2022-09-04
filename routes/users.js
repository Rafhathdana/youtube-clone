import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyTocken } from "../verifyTocken.js";

const router = express.Router()
//update user
router.put("/:id", verifyTocken, update)

// delete user
router.delete("/:id",verifyTocken ,deleteUser)

// get a user
router.get("/find/:id", getUser)
// subscribe user
router.put("/sub/:id",verifyTocken ,subscribe)
// unsubscribe user
router.put("/unsub/:id",verifyTocken ,unsubscribe)
// like a Video
router.put("/like/:videoId",verifyTocken , like)
// dislike a video
router.put("/dislike/:videoId",verifyTocken , dislike)
export default router;