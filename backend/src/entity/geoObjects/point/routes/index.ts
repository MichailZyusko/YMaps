import { Router } from 'express';

import {
  createPoint,
  getPoints,
  getPointById,
  // updatePoint,
  deletePoint,
} from '../controllers';

const router: Router = Router();

router.route('/')
  .get(getPoints)
  .post(createPoint);

router.route('/:id')
  .get(getPointById)
  // .put(updatePoint)
  .delete(deletePoint);

export default router;
