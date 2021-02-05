import React from 'react';

import './customBottom.styles.scss';

const CustomBottom =({children, ...otherProps}) =>(
    <button className="custom-button" {...otherProps}> 
        {children}
    </button>

)

export default CustomBottom;