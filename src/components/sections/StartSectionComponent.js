import React from 'react'

export default function StartSection({children, bgi}) {
    return (
        <header className={bgi}>
            {children}
        </header>
    )
}