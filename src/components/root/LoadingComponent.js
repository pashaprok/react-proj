import React from 'react'
import { Spinner } from 'reactstrap';

export default function Loading() {
    return (
        <div className="loading">
            <Spinner 
                type="grow" 
                color="#2e3641" 
                style={{ 
                    width: '3rem', 
                    height: '3rem' 
                }} 
            />
        </div>
    )
}
