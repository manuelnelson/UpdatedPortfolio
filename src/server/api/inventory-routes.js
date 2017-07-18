import express from 'express';
// import validate from 'express-validation';
// import paramValidation from '../config/user-validation';
import { InventoryCtrl} from '../controllers';
const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/inventorys - Get list of inventorys */
  .get(InventoryCtrl.list)

  /** POST /api/inventorys - Create new inventory */
  .post(InventoryCtrl.create);
  // .post(validate(paramValidation.createUser), InventoryCtrl.create);

router.route('/:id')
  /** GET /api/inventorys/:id - Get inventory */
  .get(InventoryCtrl.get)

  /** PUT /api/inventorys/:id - Update inventory */
  .put(InventoryCtrl.update)

  /** DELETE /api/inventorys/:id - Delete inventory */
  .delete(InventoryCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('id', InventoryCtrl.load);

export default router;
