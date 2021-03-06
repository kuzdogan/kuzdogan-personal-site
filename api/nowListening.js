const { getNowPlaying } = require('../lib/spotify');

exports.handler = async (event, context, callback) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        isPlaying: false
      })
    };
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return {
    statusCode: 200,
    body: JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title
    })
  };
};