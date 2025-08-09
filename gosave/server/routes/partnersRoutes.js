import { Router } from 'express';
import { getPartner, listLocations, listPartners } from '../controllers/partnersController.js';

const router = Router();

router.get('/', listPartners);
router.get('/locations', listLocations);
router.get('/:id', getPartner);

export default router;