import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: { type: 'String' },
    url: { type: 'String', required: true },
    source: { type: 'String', required: true }, 
});

export default mongoose.model('Song', SongSchema);