import React,{useEffect, useState} from 'react';
import './App.css';
import './style.css';
import  Login from'./Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
const [{ user, token}, dispatch] = useDataLayerValue();
  // const [token, setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash ="";
    
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
  

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) =>{
        dispatch({
          type:'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists,
        });
      });

    spotify.getPlaylist('3THwSRA5bHXrd6u5Okbg8F').then(response =>(
      dispatch({
        type: "SET_DISCOVER_WEELY",
        discover_weekly:response
      })
    ))
    }

   

      
  }, []);
  

  return (
    <div className="app">
      {
        token ? (
        <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
      
  

    </div>
  );
}

export default App;