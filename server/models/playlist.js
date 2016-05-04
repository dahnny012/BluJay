import mongoose from 'mongoose';
import Song from './song';
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    name: { type: 'String', required: true },
    ownerID: { type: 'String' },
    songs : [Song]
});

export default mongoose.model('Playlist', playlistSchema);