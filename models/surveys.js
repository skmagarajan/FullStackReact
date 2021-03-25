const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientsSchema = require('./recipients');

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [recipientsSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	dataSend: Date,
	lastResponded: Date
});

mongoose.model('surveys',surveySchema);