import { Router } from 'express';

import pointController from '../controllers';

const router: Router = Router();

router.route('/')
  .get(pointController.get)
  .post(pointController.create);

router.route('/:id')
  .get(pointController.getById)
  .put(pointController.update)
  .delete(pointController.delete);

export default router;
