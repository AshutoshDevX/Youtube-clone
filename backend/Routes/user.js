import express from 'express';
import { userSignUp } from '../Controllers/user.js';
import { userSignIn } from '../Controllers/user.js';
import { userLogout } from '../Controllers/user.js';


const router = express.Router();

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/signout", userLogout);


export default router;