import React from 'react';

import './customBottom.styles.scss';

const CustomBottom =({children, isGoogleSignIn, ...otherProps}) =>(
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  {...otherProps}> 
        {children}
    </button>

)

export default CustomBottom;