import { Router } from 'express';
import { listPlans, purchase, status } from '../controllers/membershipController.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/plans', listPlans);
router.post('/purchase', requireAuth, purchase);
router.get('/status', requireAuth, status);

export default router;