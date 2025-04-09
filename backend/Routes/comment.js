import express from 'express';
import { addComment, getComment } from '../Controllers/comment.js';
import { auth } from '../Controllers/auth.js';

const router = express.Router();

router.post("/", auth, addComment);
router.get("/:id", getComment);
export default router;