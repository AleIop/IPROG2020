(this.webpackJsonppeekmusiclab=this.webpackJsonppeekmusiclab||[]).push([[0],{12:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g}));var a=n(27),r=n.n(a),o=n(34),i=n(21),l=n(35),c=n(0),s=n.n(c),u=n(54);n(70);u.initializeApp({apiKey:"AIzaSyAPO4fSzO6KUyphdBvNLHr0UMr7ArpPVK4",authDomain:"iprog2020.firebaseapp.com",databaseURL:"https://iprog2020.firebaseio.com",projectId:"iprog2020",storageBucket:"iprog2020.appspot.com",messagingSenderId:"667835768822",appId:"1:667835768822:web:407e0382496fd8a7f731d7"});u.firestore();function d(e){l.a.render(e,(function(e){return s.a.createElement(s.a.Fragment,{},e.map((function(e){return f(e)})))}),document.getElementById("resultsDiv")),setTimeout((function(){document.body.querySelectorAll(".song").forEach((function(e){var t=document.getElementById(e.id);h(e.id).then((function(e){var n=window.blobCreator(e);t.appendChild(n)}))}))}),1e3)}function m(e,t){setTimeout((function(){var t=document.getElementById(e);null==t||t.getElementsByTagName("svg").length||h(e).then((function(e){var n=window.blobCreator(e);t.appendChild(n)}))}),1e3)}function f(e){if(null!==e.track.preview_url)return s.a.createElement("div",{id:e.track.id,key:e.track.id,className:"song draggable songtooltip",onDragStart:function(t){return p(t,e)},draggable:!0,onContextMenu:function(t){return b(e.track.id)}},s.a.createElement("audio",{id:"audio"+e.track.id,src:e.track.preview_url,muted:!0,loop:!0}),s.a.createElement("div",{id:"tooltip-"+e.track.id,className:"tooltiptext hidden"},s.a.createElement("h3",null,e.track.name),s.a.createElement("br",null),s.a.createElement("h4",null,e.track.artists.map((function(e){return e.name}))),s.a.createElement("a",{href:e.track.external_urls.spotify},"Open in spotify")),s.a.createElement("br",null))}var p=function(e,t){console.log("Song "+t.track.name+" is being dragged"),e.dataTransfer.setData("text/plain",JSON.stringify(t)),e.dataTransfer.effectAllowed="copy"},b=function(e){console.log("open toolkit");document.getElementsByClassName("tooltiptext visible");var t=document.getElementById("tooltip-"+e),n=t.classList[1];t.classList.remove(n),t.classList.add("hidden"==n?"visible":"hidden")};function g(e){return v(e=e||"37i9dQZEVXbMDoHDwVN2tF","playlist").then((function(e){return e.items}))}function h(e){return v("?ids="+(e=e||""),"audio").then((function(e){return e.audio_features[0]}))}function v(t,n){var a=i.b+":"+i.d,l=new e(a).toString("base64"),c="",s=new Headers;s.append("Authorization","Basic "+l);var u=new URLSearchParams;u.append("grant_type","client_credentials");var d=fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:s,body:u,redirect:"follow"}).then((function(e){return e.json()})).catch((function(e){return console.log("error",e)}));function m(){return(m=Object(o.a)(r.a.mark((function e(n){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.then((function(e){return c=e.access_token}));case 2:return e.sent,a="playlist"==n?i.c+t+"/tracks":i.a+t,o=fetch(a,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c}}).then((function(e){return e.json()})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(e){return m.apply(this,arguments)}(n)}}).call(this,n(49).Buffer)},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i}));var a="https://api.spotify.com/v1/playlists/",r="https://api.spotify.com/v1/audio-features/",o="440325bb5cab47af9d5f1af2cad762fa",i="c5bf0b3bd0ca4d4eac5b684505d7665d"},31:function(e,t,n){},35:function(e,t,n){"use strict";var a=n(36),r=n(37),o=n(0),i=n.n(o),l=n(10),c=n.n(l),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"render",value:function(e,t,n){this.cancelCallback&&this.cancelCallback();var a=!1;c.a.render(this.createSpinner(),n),e.then((function(e){a||c.a.render(t(e),n)})).catch((function(e){if(!a){var t=i.a.createElement("span",null,e.message);c.a.render(t,n)}})),this.cancelCallback=function(){a=!0}}},{key:"createSpinner",value:function(){return i.a.createElement("div",{className:"spinnerClass"},i.a.createElement("img",{height:100,alt:"",src:"http://cdn.lowgif.com/full/d9675675623d5f27-loading-gif-transparent-background-loading-gif.gif"}))}}]),e}();t.a=s},40:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n(18),l=n(11),c=n(38),s=n(14),u=n(13),d=function(e){var t=e.songs,n=e.muted,a=(e.nav,e.homepageControl),o=e.playlistControl,i=e.handleClick,l=(e.openNav,e.onDrop),c=e.onDragOver,s=Object(u.a)(a,2),d=(s[0],s[1],Object(u.a)(o,2)),m=d[0],f=d[1],p=(t.length,l),b=c;return r.a.createElement("div",{id:"navbar",className:"navbar debug nothidden"},r.a.createElement("h1",{id:"menu-title"},"blobify."),r.a.createElement("div",{className:"navbarContent"},r.a.createElement("div",{className:"navbarContent-playlist"},r.a.createElement("br",null),r.a.createElement("h2",{id:"content-title"},"Pick playlist"),r.a.createElement("h4",{id:"content-title"},"Switch playlist to ",r.a.createElement("span",{className:"tooltip"},"blobify songs",r.a.createElement("span",{className:"tooltiptext"},"What you see here is not random colors and shapes. ",r.a.createElement("br",null),r.a.createElement("br",null),"Songs contain data. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"A blob is a visual representation of a songs data, more so its energy and key. ",r.a.createElement("br",null),r.a.createElement("br",null),"The level of energy determines its shape, key its color and the dots... - we call it blobify. "))),r.a.createElement("div",{className:"playlist"}),r.a.createElement("h5",{id:"content-title"},"Fetched from Spotify")),r.a.createElement("div",{className:"navbarContent-save droppable drophere",onDragOver:b,onDrop:p},r.a.createElement("h2",{id:"content-title"},"Save songs"),r.a.createElement("h4",{id:"content-title"},"Drag and drop blobs here to add songs to your personal collection."),r.a.createElement("div",{className:"collection"},r.a.createElement("div",{id:"miniPreview",className:"miniPreviewScroll"}),r.a.createElement("button",{id:"collection-button",onClick:function(){return m()}},f)))),r.a.createElement("div",{className:"muteButton mute",onClick:function(){return i(n.audioMuted)}}))},m=function(e){return{type:"ADD_SONG",song:e}},f=function(e){return{type:"REMOVE_SONG",song:e}},p=Object(l.b)((function(e,t){return{songs:e.currentPlaylist,muted:e.audioMuted,nav:e.navbarHidden}}),(function(e,t){return{homepageControl:[function(){return t.history.push("/trending")},"Back to the trending songs"],playlistControl:[function(){for(var e=document.getElementById("miniPreview");e.firstChild;)e.removeChild(e.firstChild);t.history.push("/myplaylist")},"Export to Spotify"],handleClick:function(t){e({type:"MUTE_AUDIO",bool:t});var n=document.body.querySelector(".muteButton"),a=n.classList[1];n.classList.remove(a),n.classList.add("mute"==a?"unmute":"mute");var r=document.getElementsByTagName("audio");Object.keys(r).map((function(e){return r[e].muted=t}))},openNav:function(t){e({type:"HIDE_NAVBAR",bool:t});var n=document.getElementById("navbar"),a=n.classList[2];n.classList.remove(a),n.classList.add("hidden"==a?"nothidden":"hidden")},onDrop:function(t){console.log("Dropped into playlist");var n=t.dataTransfer.getData("text/plain");e(m(JSON.parse(n)));var a=document.getElementById("miniPreview"),r=document.getElementById(JSON.parse(n).track.id),o=document.getElementById(JSON.parse(n).track.id).cloneNode(!0);o.getElementsByTagName("g")[0].setAttribute("transform","matrix(1 0 0 1 0 -10) scale(0.2)"),o.getElementsByTagName("svg")[0].setAttribute("height","50"),o.getElementsByTagName("svg")[0].setAttribute("width","50"),o.addEventListener("click",(function(t){e(f(JSON.parse(n)));for(var o=a.children,i=0;i<o.length;i++){var l=o[i];if(l.getAttribute("id")==JSON.parse(n).track.id){a.removeChild(l);break}}r.getElementsByTagName("svg")[0].setAttribute("opacity","1.0")})),o.style.height="70px",o.style.width="60px",a.appendChild(o),r.getElementsByTagName("svg")[0].setAttribute("opacity","0.2")},onDragOver:function(e){e.preventDefault()}}}))(d),b=(n(31),function(e){var t=e.songs,n=e.whenDone,o=e.onResultsClick,i=e.onAdd,l=e.onLoadPlaylist,c=Object(u.a)(n,2),s=(c[0],c[1],Object(u.a)(i,2));s[0],s[1];return Object(a.useEffect)((function(){l("37i9dQZEVXbMDoHDwVN2tF")}),[]),r.a.createElement("div",{id:"search",className:"mainContent debug"},r.a.createElement("div",{id:"resultsDiv",onClick:function(e){return o(e.target,t)}}))}),g=n(12),h=Object(l.b)((function(e){return{songs:e.currentPlaylist}}),(function(e,t){return{whenDone:[function(){return t.history.push("/myplaylist")},"Go to My Playlist"],onResultsClick:function(t,n){var a=t.classList.contains("song"),r=t.classList.contains("addButton");if(a){t.id;t.childNodes[1].classList.remove("buttonInvisible"),document.querySelectorAll(".buttonVisible").forEach((function(e){e.classList.remove("buttonVisible"),e.classList.add("buttonInvisible")})),t.firstChild.classList.add("buttonVisible")}if(r){var o=t.parentNode.id,i=n.find((function(e){return e.track.id==o}));e(m(i))}},onAdd:[function(t){return e(m(t))},"Add to the playlist"],onLoadPlaylist:function(t){Object(g.d)(t).then((function(t){return e({type:"SET_PLAYLIST",songs:t})})),e({type:"LOAD_PLAYLIST",id:t})}}}))(b),v=function(e){var t=e.songs,n=e.whenDone,a=e.onDelete,o=e.displaySong,i=e.getBlob,l=Object(u.a)(n,2),c=l[0],s=l[1];return r.a.createElement("div",{id:"summary",className:"mainContent debug"},r.a.createElement("div",null,"Current playlist:",r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Song"),r.a.createElement("th",null,"Genre"),r.a.createElement("th",null,"Release date"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{id:"blob"},i(e.track.id)),r.a.createElement("td",null,o(e)),r.a.createElement("td",null,e.track.name),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e)}},"Delete from playlist")))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null,"TOTAL SONGS"),r.a.createElement("td",null),r.a.createElement("td",null,t.length))))),r.a.createElement("div",null,r.a.createElement("button",{className:"nav",onClick:function(){return c()}},s)))},E=Object(l.b)((function(e){return{songs:e.songs}}),(function(e,t){return{whenDone:[function(){return t.history.push("/trending")},"Back to the trending songs"],onDelete:function(t){return e(f(t))},displaySong:function(e){return Object(g.a)(e)},getBlob:function(e){return Object(g.c)(e)}}}))(v),y=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"flexParent"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(s.a,{to:"/trending"})}})),r.a.createElement(s.b,{path:"/trending",component:h}),r.a.createElement(s.b,{path:"/myplaylist",component:E}),r.a.createElement(s.b,{component:p})))},k=n(22);var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.song;switch(t.type){case"ADD_SONG":console.log(e);var a=e.some((function(e){return e.track.id===n.track.id}));return a?(window.alert("".concat(n.track.name," is already present in the playlist.")),Object(k.a)(e)):[].concat(Object(k.a)(e),[n]);case"REMOVE_SONG":return Object(k.a)(e).filter((function(e){return e.track.id!==n.track.id}));default:return Object(k.a)(e)}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PLAYLIST":return t.songs;case"LOAD_PLAYLIST":return Object(g.b)(Object(g.d)(t.id)),e;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MUTE_AUDIO":return e.audioMuted=!t.bool,e;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HIDE_NAVBAR":return e.navbarHidden=!t.bool,e;default:return e}},C=Object(i.b)({songs:O,currentPlaylist:S,audioMuted:N,navbarHidden:w}),D=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},A=Object(i.c)(C,D);A.subscribe((function(){return localStorage.setItem("reduxState",JSON.stringify(A.getState()))})),Object(o.render)(r.a.createElement(l.a,{store:A},r.a.createElement(y,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.49efa2a5.chunk.js.map