import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
router.post('/:id/ticket', flightsCtrl.createTicket);
router.delete('/:id', flightsCtrl.delete);


export {
  router
}
