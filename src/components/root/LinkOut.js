import React from 'react'

export default function LinkOut({children, link, cls}) {
    return (
        <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer" 
            className={cls}
        >
            {children}
        </a>
    )
}
