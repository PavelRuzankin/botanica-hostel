import React from "react";

export default  ({children, direction}) => {

    return (
        <div data-direction={direction} className={`slider__switch slider__switch_${direction}`}>
            {children}
        </div>
    )
}