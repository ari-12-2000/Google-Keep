import React from "react";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
function Header(){
    return(
        <header>
            <h1>
            <EmojiObjectsIcon style={{ fontSize: 40 }}/>
                Google Keep
            </h1>
        </header>
    );
}

export default Header; 