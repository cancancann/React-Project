import React from "react";
import nothernPic from 'C:/Users/Hikmet Can/OneDrive/Masaüstü/hemisphere/src/img/nothern-hemisphere.png';
import southernPic from 'C:/Users/Hikmet Can/OneDrive/Masaüstü/hemisphere/src/img/Southern-Hemisphere.jpg';
import './Hemisphere.css'

const hemisphereConfig = {
    Nothern: {
        text: 'it is nothern hemisphere',
        picture: nothernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        picture: southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {
    
    const hemisphere = latitude > 0 ? 'Nothern' : 'Southern';
    const {text , picture} = hemisphereConfig[hemisphere]
    
    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt="hemisphere"></img>
                </div>
                <div className="ui teal bottom attached label">
                    <h1> { text } </h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;
