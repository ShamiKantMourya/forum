import React from 'react';

import Post from './Post';
import Sort from './Sort';


const Test = () => {
    return (
        <div>
            <div className='test' style={{display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "0px"}}>
                <Post />
                <Sort />
            </div>
        </div>
    )
}

export default Test;