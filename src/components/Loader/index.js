import React from 'react';
import loadersrc from '../../asset/download.png'

const Loader = props =>(  
    <div>
        <img 
        style={{width:75}}
    
        alt="loader-icon"
        src={loadersrc}  />
    </div>
);

export default Loader;

