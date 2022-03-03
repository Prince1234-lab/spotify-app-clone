import React from "react";
import './Login.css';
import { loginUrl } from "./spotify";

function Login(){
    return(
        <div className=" login"> 
        <img src="https://music.mxdwn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt=""/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login; 