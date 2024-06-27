import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, test, unsubscribe, update, } from '../controllers/user.js';


const router = express.Router();

// update user
router.put("/:id", update);

// delete user
router.delete("/:id", deleteUser);


// get user
router.get("/find/:id",getUser);

// subscribe a user
 router.put("/sub/:id",subscribe)

 // unsubscribe a user
 router.put("/unsub/:id",unsubscribe)


 // like a video
 router.put("/like/:Videoid",like)


 // dislike a video
 router.put("/dislike/:Videoid",dislike)


export default router;