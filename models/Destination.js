import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
	airport: {
		type: String,
		// enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
	},
});

const  Destination = mongoose.model('Destination', destinationSchema);

export { Destination };
