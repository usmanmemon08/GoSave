import { Router } from 'express';
import { login, logout, profile, register } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', requireAuth, profile);

export default router;