import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const flightSchema = new Schema({
	airline: String,
  airport: {type:String, enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default:'DEN'},
  flightNo: Number,
  departs: Date
});

const Flight = mongoose.model('Flight', flightSchema)


export{
  Flight
}