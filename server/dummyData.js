import Playlist from './models/playlist';
import Song from './models/song';

export default function () {
  // load fake data only if there was no Playlist
  Playlist.count().exec((err, count) => {
    if (count > 0) {
      console.log("not loading dummy data, count >0");
      return;
    }
  
  const song1 = new Song({ name: 'Mr Brightside', url : 'https://www.youtube.com/watch?v=gGdGFtwCNBE', source : 'youtube' });
  const song2 = new Song({ name: 'Lemon Tree', url : 'https://www.youtube.com/watch?v=bCDIt50hRDs', source : 'youtube' }) ;
  
  const playlist1 = new Playlist({ cuid : 'abc12345', name : 'Awesome Test Playlist', ownerID : 'leewc', songs : [song1, song2] });
  
  Playlist.create([playlist1], (error) => {
      if (!error) {
        console.log('Dummy Playlists ready to go....!!!');
      }
    });
  });
}