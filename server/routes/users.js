import express from 'express';
import { deleteUser, getUser, test, update, } from '../controllers/user.js';


const router = express.Router();

// update user
router.put("/:id", update);

// delete user
router.delete("/:id", deleteUser);


// get user
router.get("/find/:id",getUser);

// subscribe a user
 router.put("/sub/:id")

 // unsubscribe a user
 router.put("/unsub/:id")


 // like a video
 router.put("/like/:Videoid")


 // dislike a video
 router.put("/dislike/:Videoid")


export default router;