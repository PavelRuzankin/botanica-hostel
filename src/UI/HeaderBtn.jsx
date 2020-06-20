import React from "react";

export default  ({title, id}) => {

    return (
        <div data-id={id} className="header__btn">
            {title}
        </div>
    )
}