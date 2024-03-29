# kaanuzdogan.com

My personal blog and website repo.

Based on the Gatsby Theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

## Install

Install with

```
npm install
```

### Apple Silicone

If you have an Apple M processor you need to install the compatible `vips` dependency. Follow the instructions [here](https://github.com/nuxt/image/issues/204) (except the `@nuxt/image` install part).

## Run

To launch the Gatsby and Netlify dev environments run

```
netlify dev
```

Netlify CLI is not a requirement but you will need it if you want to run APIs and functions. If you just need the static website dev environment you can run

```
gatsby develop
```

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

## To-Do

- [x] ~~Add comments~~ (added Disqus, self hosting takes too long)
- [] Test if newsletter is being sent when a new post is made
- [] Avoid images being too large in height
- [] Keep images smaller and enlarge images on click
