import * as apiConfig from './apiConfig.js'
import RenderPromise from './renderPromise.js'
import React from 'react'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAPO4fSzO6KUyphdBvNLHr0UMr7ArpPVK4",
  authDomain: "iprog2020.firebaseapp.com",
  databaseURL: "https://iprog2020.firebaseio.com",
  projectId: "iprog2020",
  storageBucket: "iprog2020.appspot.com",
  messagingSenderId: "667835768822",
  appId: "1:667835768822:web:407e0382496fd8a7f731d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export function displaySongs(songListPromise) {
  let collection = getCollectionList();
  console.log(collection);
  RenderPromise.render(
    songListPromise,
    songs => React.createElement(React.Fragment, {}, songs.map(song => createSongDisplay(song, 'search'))),
    document.getElementById('resultsDiv'));


    setTimeout(() => {
      let songs = document.body.querySelectorAll('.song');
      songs.forEach(song => {
        //deleteSong(song.id); USE THIS TO RESET THE PROGRAM!
        //collection.then(x=>console.log(x));
        let root = document.getElementById(song.id);
        let alreadyPresent = false; //If song present in our playlist set the bool to true.

        searchAudioFeatures(song.id).then(features => {

          if (features !== null){
            //Add svg blobs to the placeholder divs
            root.childNodes[2].remove(root.childNodes['img']);
            var svg = window["blobCreator"](features,1,'audio');
            root.appendChild(svg);

            //Add features info into the tooltips
            var energyElement = document.getElementById("energyH-"+song.id);
            var keyElement = document.getElementById("keyH-"+song.id);
            var tempoElement = document.getElementById("tempoH-"+song.id);
            if (energyElement !== null){
              energyElement.innerHTML = 'Energy: ' + features.energy;
              keyElement.innerHTML = 'Key: ' + features.key;
              tempoElement.innerHTML = 'Tempo: ' + features.tempo + ' BPM';
            };
         };
          /*
            If alreadyPresent bool is true, we want the blob to appear transparent
            and a small version of the blob visible inside the preview.
          */
          /*
            PROBLEM JUST NU!! Blobbarna hinner inte renderas men de ritas ändå
            som små och därför är de osynliga.
          */

          collection.then(coll => {
            for(var j = 0; j < coll.length; j++) {
              //console.log(coll[j].id);
              if(coll[j].track.id == song.id) {
                let blobRoot = document.getElementById(song.id);
                blobRoot.getElementsByTagName('svg')[0].setAttribute("opacity", "0.2");

                //Put in preview part (HARD!)
                /*
                let blobCopy = document.getElementById(song.id).cloneNode(true); //small blob
                //console.log(blobCopy);
                let miniBlob = getMiniBlob(blobCopy, blobRoot, song.id);
                let miniPreview = document.getElementById("miniPreview");
                miniPreview.appendChild(miniBlob);
                blobCopy.getElementsByTagName('svg')[0].setAttribute("transform", "scale(0.2)");
                */
                break;
              }
            }
          });
        });
      });
    }, 1000);
    /*
      Scale down all small preview blobs
    */
}

export function getBlob(song, scale, div) {
  if (song.track.preview_url) {
    console.log('In getBlob():\nsong -> ', song.track.id + '\ndiv -> ', div.id);
    let muteBoolean = document.querySelector('.muteButton').classList.contains('mute');

    var sound = document.createElement('audio');
    sound.id = 'audio-playlist' + song.track.id;
    sound.muted = muteBoolean;
    sound.src = song.track.preview_url;
    sound.loop = 'loop';
    div.appendChild(sound);

    searchAudioFeatures(song.track.id)
      .then(features => div.appendChild(window['blobCreator'](features, scale, 'audio-playlist')));
  }
}

/*
  Function generates a mini blob that will be put into the small preview window.

*/
export function getMiniBlob(root, originalRoot, songID) {
  let miniPreview = document.getElementById("miniPreview");

  let tempSmallBlob = root.getElementsByTagName('g')[0];
  if(tempSmallBlob != undefined) {
    root.getElementsByTagName('g')[0].setAttribute("transform", "matrix(1 0 0 1 0 -10) scale(0.2)");
  }
  root.getElementsByTagName('svg')[0].setAttribute("height", "50");
  root.getElementsByTagName('svg')[0].setAttribute("width", "50");
  //root.getElementsByTagName('svg')[0].setAttribute("transform", "scale(0.2)");
  //rootCopy.removeAttribute("class");
  //rootCopy.addAttribute("class", "miniBlob");
  //Add a button event to miniBlob that removes the song from playlist and makes large blob visible.
  root.addEventListener('click', function(ev) {
    deleteSong(songID);
    var children = miniPreview.children;
    for(var i = 0; i < children.length; i++) {
      var currChild = children[i];
      if(currChild.getAttribute("id") === songID) {
        miniPreview.removeChild(currChild);
        break;
      }
    }
    //Make root element visible.
    originalRoot.getElementsByTagName('svg')[0].setAttribute("opacity", "1.0");
  });

  root.style.height = "70px";
  root.style.width = "60px";
  root.removeAttribute("draggable");

  return root;
}


/*
  Give drag drop element to this.
*/
export function createSongDisplay(song, componentName) {
  let muteBoolean = document.querySelector('.muteButton').classList.contains('mute');

  if (song.track.preview_url !== null){
    return (
      <div id={song.track.id} key={song.track.id} className='song draggable songtooltip'
            onDragStart={(e)=>onDragStart(e, song)} draggable onContextMenu={(e)=>openTooltip(e, song.track.id)}>
        <audio id={'audio'+song.track.id} src={song.track.preview_url} muted={muteBoolean} loop></audio>
        <div id={"tooltip-"+song.track.id} className="tooltiptext hidden">

          <div className="tooltip-content">





          <h3>{song.track.name}</h3>
          <h4>{song.track.artists.map(artist => {return artist.name + "  "})}</h4>

          <h6 >
            <a classname="open_spotify" href={song.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">Open in Spotify   <span ><img className='ext_link' src="external-link.svg"  alt="link" height='10' width='10'/>  </span></a>
          </h6>
          <br/>


          <h6 id={"energyH-"+song.track.id}></h6>
          <h6 id={"tempoH-"+song.track.id}></h6>
          <h6 id={"keyH-"+song.track.id}></h6>
          <br/>

          <button onClick={()=>{
            let root = document.getElementById(song.track.id);
            //Disable Add functionality for the moment
            root.getElementsByTagName('div')[0].getElementsByTagName('button')[0].disabled = true;
            let rootCopy = root.cloneNode(true);
            rootCopy.getElementsByTagName('div')[0].remove();
            /* Remove the tooltip-id div from rootCopy before sending it in */
            saveSong(song, root, rootCopy);
            //root.getElementsByTagName('div')[0].getElementsByTagName('button')[0].disabled = false;
          }}>Add</button>


          <button onClick={()=> {
            let miniPreview = document.getElementById("miniPreview");
            deleteSong(song.track.id)
            var children = miniPreview.children;
            for(var i = 0; i < children.length; i++) {
              var currChild = children[i];
              if(currChild.getAttribute("id") === song.track.id) {
                miniPreview.removeChild(currChild);
                break;
              }
            }
            let root = document.getElementById(song.track.id);
            root.getElementsByTagName('svg')[0].setAttribute("opacity", "1.0");
          }} className="secondary-button">Remove</button>

          <br/>
          <br/>



          </div>

          <div id="backgroundSummary" onClick={(e)=>openTooltip(e, song.track.id)}></div>
        </div>
        {/* <button className='addButton buttonInvisible'>Add to playlist</button><br/> */}
        <img className='loadingBlobs' src="blurryblobBW.svg"  alt="blobyfied song" height='300' width='300'/>
        <br/>
      </div>
    );
  }
}
const onDragStart = (ev, song) => {
  console.log("Song " + song.track.name + " is being dragged");
  ev.dataTransfer.setData("text/plain", JSON.stringify(song));
  //Want to transfer the html element being dragged
  //let root = document.getElementById(song.track.id);
  //If the element has an svg child => the blob
  // if(root.getElementsByTagName('svg').length) {
  //   ev.dataTransfer.setData("text/html", root);
  // }
  ev.dataTransfer.effectAllowed = "copy";
}
export function openTooltip(e, id) {
  e.preventDefault();
  //console.log("open tooltip", id)
  //var visibleTooltips = document.getElementsByClassName("tooltiptext visible");

    // for (var i = 0, len = visibleTooltips.length; i < len; i++) {
    //   console.log(visibleTooltips[i])
    //   visibleTooltips[i].classList.add('hidden');
    //   visibleTooltips[i].classList.remove('visible');
    //   }

  // var visibleTooltips = document.getElementsByClassName("tooltiptext visible");
  // visibleTooltips.classList.add('hidden');
  // visibleTooltips.classList.remove('visible');

  var tooltip = document.getElementById("tooltip-"+id);
  let currentClass = tooltip.classList[1];

  //Makes div not draggable when tooltip is open
  var draggableDiv = document.getElementById(id);
  if (currentClass === "visible" && draggableDiv!==null){
    draggableDiv.draggable = true;
  } else if (currentClass === "hidden" && draggableDiv!==null) {
    draggableDiv.draggable = false;
  }

  tooltip.classList.remove(currentClass);
  tooltip.classList.add((currentClass === 'hidden'? 'visible' : 'hidden'));
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

/*
  Drawn a mini blob inside the preview window.
*/
export function drawMiniBlob(rootCopy, root, song) {
  let miniPreview = document.getElementById("miniPreview");
  //Change the svg/blob dimensions.
  rootCopy.getElementsByTagName('g')[0].setAttribute("transform", "matrix(1 0 0 1 0 -10) scale(0.2)");
  rootCopy.getElementsByTagName('svg')[0].setAttribute("height", "50");
  rootCopy.getElementsByTagName('svg')[0].setAttribute("width", "50");
  //rootCopy.removeAttribute("class");
  //rootCopy.addAttribute("class", "miniBlob");

  //Adds delete crosses to mini blobs
  var cross = document.createElement('img');
  cross.src = 'cross.svg';
  cross.className = 'delete-miniblob'
  rootCopy.appendChild(cross);

  //Add a button event to miniBlob that removes the song from playlist and makes large blob visible.
  rootCopy.addEventListener('click', function(ev){
    deleteSong(song.track.id);
    var children = miniPreview.children;
    for(var i = 0; i < children.length; i++) {
      var currChild = children[i];
      if(currChild.getAttribute("id") == song.track.id) {
        miniPreview.removeChild(currChild);
        break;
      }
    }
    //Make root element visible.
    root.getElementsByTagName('svg')[0].setAttribute("opacity", "1.0");
  });
  rootCopy.style.height = "70px";
  rootCopy.style.width = "60px";

  miniPreview.appendChild(rootCopy);
  //Lower the div oppacity to show it's been added.
  root.getElementsByTagName('svg')[0].setAttribute("opacity", "0.2");
  root.setAttribute("draggable", true);
  let button = root.getElementsByTagName('div')[0].getElementsByTagName('button');
  if(button != undefined) {
    root.getElementsByTagName('div')[0].getElementsByTagName('button')[0].disabled = false;
  }
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
    let fetchString = (type === 'playlist') ?
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

// Saves a new song to your Cloud Firestore database.
export function saveSong(song, root, rootCopy) {
  root.setAttribute("draggable", false);
  loadSong(song.track.id).then(item => {
    if(!item.exists) {
      console.log('Song not yet in playlist');
      // Add a new song object to the database.
      db.collection('playlist').doc(song.track.id).set({
        track: song.track,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(function(error) {
        console.error('Error writing new message to database', error);
      });
      drawMiniBlob(rootCopy, root, song);
    }
    else console.log('Song already in playlist');
    root.setAttribute("draggable", true);
    let button = root.getElementsByTagName('div')[0].getElementsByTagName('button');
    if(button != undefined) {
      root.getElementsByTagName('div')[0].getElementsByTagName('button')[0].disabled = false;
    }
  })
  //root.setAttribute("draggable", true);
}

// Loads a specific song from a firestore collection
export function loadSong(songID) {
  //console.log('Song in loadSong(): ', {songID});
  return db.collection('playlist').doc(songID).get();
}

// Deletes a specific song from a firestore collection
export function deleteSong(id) {
  db.collection("playlist").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

// Loads the content of an entire database collection
export function loadCollection(callback) {
  db.collection("playlist").onSnapshot({includeMetadataChanges:false}, querySnapshot => {
    let array = [];
    querySnapshot.forEach(doc => array = [...array, doc.data()]);
    callback(array);
  });
}

// Loads the content of an entire database collection
export function getCollectionList() {
  return db.collection("playlist").get().then((querySnapshot) => {
    let collection = [];
    querySnapshot.forEach((doc, i) => collection.push(doc.data()));
    return collection;
  });
}
