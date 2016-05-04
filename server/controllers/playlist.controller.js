import Playlist from '../models/playlist';
import cuid from 'cuid';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';

//get all playlists
export function getPlaylists(req, res) {
    console.log("getting playlists");
    Playlist.find().sort('-dateAdded').exec((err, playlists) => {
        if(err) {
            return res.status(500).send(err);
        }
        console.log('plist' + playlists);
        res.json({ playlists });
    });
}

//get one playlist
export function getPlaylist(req, res) {
    const newSlug = req.query.slug.split('-');
    const newCuid = newSlug[newSlug.length - 1];
    
    Playlist.findOne({ cuid : newCuid }).exec((err, playlist) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.json({ playlist });
    });
}