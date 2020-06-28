import React from 'react'
import { Link } from 'react-router-dom'
import './btns.css'

export default function BtnDark({link, text, icon}) {
    return (
        <Link to={link} className="btn-dark">
            {icon} {text}
        </Link>
    )
};