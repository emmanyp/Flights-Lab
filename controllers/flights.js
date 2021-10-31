import { Flight} from '../models/Flight.js'

function newFlight(req, res) {
  res.render("flights/new", {
      title: 'Add Flight'
  })
}

function create(req, res) {
  for (let key in req.body) {
		if (req.body[key] === '') {
			delete req.body[key];
		}
	}
  const flight = new Flight(req.body);
  Flight.create(req.body, function(error, flight) {
    res.redirect("/flights")
  })
}

function flightsIndex(req, res) {
	Flight.find({}, function (err, flights) {
		res.render('flights/index', {
			flights: flights,
			err: err,
			title: 'All Flights'
		});
	});
}

function show(req, res) {
	Flight.findById(req.params.id, function (err, flight) {
		res.render('flights/show', {
			title: 'Flight Detail',
			flight,
			
		});

		console.log(flight);
	});
}

function deleteFlight(req, res) {
	Flight.findByIdAndDelete(req.params.id, function (err, flight) {
		res.redirect('/flights');
	});
}
function createTicket(req, res) {
	Flight.findById(req.params.id, function (error, flight) {
				flight.ticket.push(req.body);
				flight.save(function(err){
					res.redirect(`/flights/${flight._id}`);
				})
			});
}


export{
  newFlight as new, 
  create, 
  flightsIndex as index,
  show,
  deleteFlight as delete,
  createTicket, 
}