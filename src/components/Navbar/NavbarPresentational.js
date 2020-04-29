import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver, selectPlaylist}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;


  return (
    <div id="navbar" className="navbar debug nothidden">

      {/* <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>blobify</h1> */}
      <h1 id="menu-title">blobify.</h1>

      <div className="navbarContent">

        <div className="navbarContent-playlist">
          {/* <button onClick={() => homepageAction()}>{homepageMessage}</button> */}
          <br/>
          <h2 id="content-title">Pick playlist</h2>
          <h4 id="content-title">Switch playlist to <span className="tooltip">blobify songs
          <span className="tooltiptext">
          What you see here is not random colors and shapes.<br/><br/>

A blob is a visual representation of a tracks <a className="link" href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/" target="_blank">audio features</a> - data on its energy, tempo and key.<br/><br/><br/>
{/* 
<div className="energy_explain">
  <h4>the<h6>energy</h6>of the track</h4>
</div> */}

The ENERGY of the track is mapped to the number of dots in the blobs which determines its shape.<br/><br/> 
{/* <h4>The higher the energy, the more aggressive blob.</h4><br/> */}

The TEMPO of the track is mapped to the speed of the blob.<br/><br/>

                                    
The KEY of the track is mapped to the color of the blob based on <a className="link" href="http://www.harmonics.com/lucy/lsd/colors.html" target="_blank">Charles Fourier's theory.</a><br/><br/><br/>

{/* - We call it to blobify songs. <br/><br/> */}


Click on the blobs for more.
</span>
          </span></h4>
     
          <div className="playlist">
            <button id='playlist37i9dQZEVXbMDoHDwVN2tF' className="selected-playlist" onClick={() => selectPlaylist('37i9dQZEVXbMDoHDwVN2tF')}>Global Top 50</button>
            <button id='playlist37i9dQZEVXbLiRSasKsNU9' onClick={() => selectPlaylist('37i9dQZEVXbLiRSasKsNU9')}>Global Viral 50</button>
            <button id='playlist37i9dQZEVXbeATsTOiMcX0' onClick={() => selectPlaylist('37i9dQZEVXbeATsTOiMcX0')}>Release Radar</button>
            <button id='playlist37i9dQZF1DXbHhDw60mrNa' onClick={() => selectPlaylist('37i9dQZF1DXbHhDw60mrNa')}>Viral Hits</button>
          </div>
          <h5 id="content-title">Fetched from Spotify</h5>

        </div>

        <div className="navbarContent-save droppable drophere"
          onDragOver={dragOverEvent}
          onDrop={dropEvent}>
          <h2 id="content-title">Save songs</h2>
          <h4 id="content-title">Drag and drop blobs here to add songs to your personal collection.</h4>

          {/* <div className="playlist"></div> */}
          <div className="collection">
            <div id="miniPreview" className="miniPreviewScroll"></div>

            {/*<div className="drophere playlistCss droppable"
                    onDragOver={dragOverEvent}
                    onDrop={dropEvent}><br/></div>*/}

            {
              /* <button className="playlistCss droppable"
                    onClick={() => playlistAction()}
                    onDragOver={dragOverEvent}
                    onDrop={dropEvent}>
                    {playlistMessage}
            </button><br/> */}

            <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button>
          </div>
        </div>
      </div>

      <div className='muteButton mute' onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
