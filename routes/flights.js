import { Router } from 'express'

const router = Router()

import * as flightsCtrl from '../controllers/flights.js'

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.get('/:id/tickets/new', flightsCtrl.createTicket);
router.post('/', flightsCtrl.create);
router.post('/:id/tickets', flightsCtrl.saveTicket)
router.delete('/:id', flightsCtrl.delete);


export {
  router
}
