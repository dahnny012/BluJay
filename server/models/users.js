import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    cuid: { type: Schema.ObjectID, required: true },
    username: { type: 'String', required: true },
    password: { type: 'String', required: true },
    dateJoined: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);
