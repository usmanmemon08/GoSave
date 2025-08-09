import { Router } from 'express';
import { getDeal, listCategories, listDeals } from '../controllers/dealsController.js';

const router = Router();

router.get('/', listDeals);
router.get('/categories', listCategories);
router.get('/:id', getDeal);

export default router;