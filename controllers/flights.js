import { Flight} from '../models/Flight.js'

function newFlight(req, res) {
  res.render("flights/new")
}

function create(req, res) {
  const flight = new Flight(req.body);
  Flight.create(req.body, function(error, flight) {
    res.redirect("/flights")
  })
	// Flight.save(function (err) {
	// 	if (err) return res.redirect('/flights/new');
	// 	res.redirect('/flights');
	// });

}

function flightsIndex(req, res) {
	Flight.find({}, function (err, flights) {
		res.render('flights/index', {
			flights: flights,
			err: err,
		});
	});
}

export{
  newFlight as new, 
  create, 
  flightsIndex as index
}