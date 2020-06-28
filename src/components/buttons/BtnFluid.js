import React from 'react'
import { Link } from 'react-router-dom'
import './btns.css'

export default function BtnFluid({link, text, icon, half}) {
    let cls = "back-btn-fluid";
    if (half) {
        cls = "btn-fluid half"
    } else {
        cls = "btn-fluid"
    }

    return (
        <Link to={link}>
            <button className={cls}>
                {icon} {text}
            </button>
        </Link>
    )
};