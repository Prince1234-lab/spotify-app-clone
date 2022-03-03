import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from '@material-ui/core'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
    return(
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" 
                src="https://www.bellanaija.com/wp-content/uploads/2021/04/Screenshot-2021-04-19-at-7.54.55-PM.png" alt=""/>
                <div className="footer__songInfo">
                    <h4>No song is Playing</h4>
                    <p>...</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize = "large" className="footer__icon"/>
                <SkipNextIcon className=" footer__icon"/>
                <RepeatIcon className="footer__icon"/>
                
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
           
        </div>
    )
}

export default Footer;