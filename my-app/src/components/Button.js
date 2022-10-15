import React from 'react';
import '../styles-sheets/button.css';

function Button({ text, isButtonClick, manageClick }) {
    return(
        <button className={ isButtonClick ? 'button-click' : 'button-restart' }
        onClick={manageClick}>
            {text}
        </button>
    );
}

export default Button;