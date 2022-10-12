import React from "react";

function Button({ text, isButtonClick, manageClick }) {
    return(
        <button className={ isButtonClick ? 'button-click' : 'button-restart' }
        onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button;