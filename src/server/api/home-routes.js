import express from 'express';
import { HomeCtrl} from '../controllers';
const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/homes - Get list of homes */
  .get(HomeCtrl.list)

  /** POST /api/homes - Create new home */
  .post(HomeCtrl.create);
  // .post(validate(paramValidation.createUser), HomeCtrl.create);

router.route('/:id')
  /** GET /api/homes/:id - Get home */
  .get(HomeCtrl.get)

  /** PUT /api/homes/:id - Update home */
  .put(HomeCtrl.update)

  /** DELETE /api/homes/:id - Delete home */
  .delete(HomeCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', HomeCtrl.load);

export default router;
