import express from "express"
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyTocken } from "../verifyTocken.js";

const router = express.Router()
//update user
router.put("/:id", verifyTocken, update)

// delete user
router.delete("/:id",deleteUser)

// get a user
router.get("/find/:id",getUser)
// subscribe user
router.put("/sub/:id",subscribe)
// unsubscribe user
router.put("/unsub/:id",unsubscribe)
// like a Video
router.put("/like/:videoId",like)
// dislike a video
router.put("/unlike/:videoId",dislike)
export default router;