# kaanuzdogan.com

My personal blog and website repo. 

Based on the Gatsby Theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

## API

API's are usually serverless functions at `/api`.

### Spotify

To get what I am currntly listening to at Spotify send a GET request to `/api/nowListening`

**Example**

```bash
curl https://kaanuzdogan.com/api/nowListening
```

Returns a JSON file of format:
```javascript
{
  "album":"Her Tape #2",
  "albumImageUrl":"https://i.scdn.co/image/ab67616d0000b273390995c84a13deee8f136bac",
  "artist":"Her",
  "isPlaying":true,
  "songUrl":"https://open.spotify.com/track/6vPBfCMBFRNtR0G4jNJbHD",
  "title":"Jeanie J"
}
```