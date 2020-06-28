import React from 'react'

export default function BtnMobile({link, img, name}) {
    return (
        <a href={link} className="download-link">
            <img 
                src={img} 
                alt={name} 
                className="download-logo"
            />
        </a>
    )
}
