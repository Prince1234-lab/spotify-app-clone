import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body"> 
            {/* header */}
            <Header spotify={spotify}/>
            <div className="body__info">
                <img className="body__img"
                src="https://www.bellanaija.com/wp-content/uploads/2021/04/Screenshot-2021-04-19-at-7.54.55-PM.png"
                 alt=""/>
                <div className=" body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                     {/* <p>{discover_weekly?.description}</p> */} 
                     <p>description...</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    < FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.item.map(item =>
               
                    <SongRow track={item.track}/>
                    )}
                     
            </div>
        </div>
    )
}

export default Body;