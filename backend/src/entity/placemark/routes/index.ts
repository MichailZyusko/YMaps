import { Router } from 'express';

import {
  getByIdPlacemark,
  getPlacemark,
  createPlacemark,
  updatePlacemark,
  deletePlacemark,
} from '../controllers';

const router: Router = Router();

router.route('/')
  .get(getPlacemark)
  .post(createPlacemark);

router.route('/:id')
  .get(getByIdPlacemark)
  .put(updatePlacemark)
  .delete(deletePlacemark);

export default router;
