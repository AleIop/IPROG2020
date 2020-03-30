import * as apiConfig from './apiConfig.js'
import RenderPromise from './renderPromise.js'
import React from 'react'

  export function displaySongs(songListPromise) {
    RenderPromise.render(
      songListPromise,
      songs => React.createElement(React.Fragment, {}, songs.map(song => createSongDisplay(song))),
      document.getElementById('resultsDiv'));

    setTimeout(() => {
      let songs = document.body.querySelectorAll('.song');
      songs.forEach(song => {
        let root = document.getElementById(song.id);
        searchAudioFeatures(song.id).then(features => {
          
          var svg = window["blobCreator"](features);
          root.appendChild(svg);
 
        });
      });
    }, 1000);
  }

  export function createSongDisplay(song) {
    return (
      <div id={song.track.id} key={song.track.id} className='song'>
        <button className='addButton buttonInvisible'>Add to playlist</button><br/>
        {song.track.name}<br/>
      </div>
    );
  }

  export function getSongDetails(song_id) {
    //TODO return acoustic features of song
  }

  export function computeAdditionTimestamp(song) {
    //return current time
  }

  export function searchPlaylist(name) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    name = name || "37i9dQZEVXbMDoHDwVN2tF";

    return retrieve(name, 'playlist').then(data => data.items); // leave out the unimportant parts of the response data
  }

  export function searchAudioFeatures(id) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    id = id || "";

    return retrieve('?ids='+id, 'audio').then(data => data.audio_features[0]);
  }

  export function retrieve(query, type) {
    const payload = apiConfig.clientID+":"+apiConfig.secretID;
    const encodedPayload = new Buffer(payload).toString("base64");

    let access_token = "";

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + encodedPayload);
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    const token = fetch("https://accounts.spotify.com/api/token", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));

    async function getSong(type) {
      let wait = await token.then(result => access_token = result.access_token);
      let fetchString = (type == 'playlist') ? 
        apiConfig.playlistENDPOINT + query + '/tracks' : 
        apiConfig.audioENDPOINT + query;

      let playlist = fetch(fetchString, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        }
      }).then(response => {
        return response.json();
      });

      return playlist;
    }

    return getSong(type);
  }
