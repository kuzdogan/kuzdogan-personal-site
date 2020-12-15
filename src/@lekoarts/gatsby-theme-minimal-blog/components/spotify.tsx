/** @jsx jsx */
import { useEffect, useRef, useState } from "react";
import { jsx, useColorMode } from "theme-ui";

const Spotify = () => {
  const thisRef = useRef(null);
  const [scrolledToFooter, setScrolledToFooter] = useState(false)
  const [isDisplayed, setDisplayed] = useState(true);
  const [playing, setPlaying] = useState({});
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  useEffect(() => { // Set display fixed until scrolling to the bottom.
    const footer = document.querySelector('footer');

    document.addEventListener("scroll", checkScroll)
    let elemHeight = thisRef.current.offsetHeight;
    
    let prevY = window.scrollY + window.innerHeight;
    function checkScroll() {
      let footerTop = getRectTop(footer) + window.scrollY;
      let windowBottomY = window.scrollY + window.innerHeight;
      if (prevY < windowBottomY) {  // Scroll Down
        if (windowBottomY > footerTop)
          setScrolledToFooter(true)
      } else { // Scroll Up
        if (windowBottomY <= footerTop)
          setScrolledToFooter(false)
      }
      prevY = windowBottomY
      // scrolledToFooter ? footerTop += elemHeight : null;
      console.log('Footer Y ' + footerTop)
      console.log('Window Y ' + windowBottomY)
    };

    function getRectTop(el) {
      var rect = el.getBoundingClientRect();
      return rect.top;
    }
    // Clean-up on unmount
    return () => document.removeEventListener("scroll", checkScroll)
  }, [thisRef])

  // Fetch now listening.
  useEffect(() => {
    fetch('/api/nowListening').then(res => res.json())
      .then(res => {
        if (!res.isPlaying)
          return setDisplayed(false);
        setPlaying(res);
        console.log(res)
      })
      .catch(err => {
        setDisplayed(false);
        console.error(err);
      })
  }, [])

  if (!isDisplayed)
    return null;
  return (
    <div
      ref={thisRef}
      sx={{
        position: scrolledToFooter ? 'relative' : 'fixed',
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
      <div
        sx={{
          width: ['100%', 300, 300],
          background: theme => isDark ? theme.colors.spotifyGreen : theme.colors.spotifyBlack,
          padding: '16px',
          color: theme => isDark ? theme.colors.spotifyBlack : theme.colors.spotifyGreen
        }}
      >
        <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px' }}>
          <b>Now I'm Listening</b>
          <a target="_blank" sx={{ display: 'flex', alignItems: 'center', ":hover": { opacity: 0.5 } }} href="https://open.spotify.com/user/11101586339">
            <img src={isDark ? '/spotify-black.svg' : '/spotify.svg'} width='24px' />
          </a>
        </div>

        <div sx={{ display: 'flex' }}>
          <div>
            <a target="_blank" sx={{ ":hover": { opacity: 0.5 } }} href={playing.songUrl}>
              <img src={playing.albumImageUrl} width="64" height="64" />
            </a>
          </div>
          <div sx={{
            variant: 'text.overflow',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 8px',
            justifyContent: 'center'
          }}>
            <a target="_blank" sx={{ variant: `text.overflow`, color: theme => isDark ? theme.colors.spotifyBlack : theme.colors.spotifyGreen }} href={playing.songUrl} >{playing.title}</a>
            <span sx={{ variant: `text.overflow`, color: theme => theme.colors.background, fontSize: '10pt' }}>{playing.artist}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotify;