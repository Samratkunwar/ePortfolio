import React from 'react'

const Button = ({link, label}) => {
    return (
        <div>
            <button to={link}>{label}</button>
        </div>
    )
}

export default Button
