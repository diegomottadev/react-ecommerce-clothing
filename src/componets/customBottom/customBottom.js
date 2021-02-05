import React from 'react';

import './customBottom.styles.scss';

const CustomBottom =({childer, ...otherProps}) =>(
    <button className="custom-button" {...otherProps}> 
        {childer}
    </button>

)

export default CustomBottom;