import React from 'react'

export default function ImageFluid({src, alt}) {
    return (
        <img 
            src={src}
            className="image-fluid" 
            alt={alt} 
        />
    )
}
