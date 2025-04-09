import express from 'express';
import { getAllVideo, uploadVideo, getVideo, getAllVideosByUserId } from '../Controllers/video.js';
import { auth } from '../Controllers/auth.js';
const router = express.Router();

router.post("/", auth, uploadVideo);
router.get("/", getAllVideo);
router.get('/:id', getVideo);
router.get('/:id/channel', getAllVideosByUserId);

export default router;