import React from 'react';

import './button.css';

const Button = (props) => {

    let buttonElement = null;

    switch (props.type) {
        case ('success'):
            buttonElement = <button className="button__success" onClick={props.clickAction}>{props.label}</button>
            break;
        case ('danger'):
            buttonElement = <button className="button__danger" onClick={props.clickAction}>{props.label}</button>
            break;
            case ('normal'):
                buttonElement = <button className="button__normal" onClick={props.clickAction}>{props.label}</button>
                break;
        default:
            buttonElement = <button className="button__success" onClick={props.clickAction}>{props.label}</button>
    }
    return (
        <div>
            {buttonElement}
        </div>
    )
}

export default Button; 