'use client'

import { useState } from "react"

export default function Login() {
    const [showComponent, setShowComponent] = useState('CLICK')

    const handleOnClick = () => {
        showComponent === 'CLICK' ? setShowComponent('ANOTHER THING') : setShowComponent('CLICK')
    }
    
    return (
        <div>
            <button onClick={handleOnClick}>{showComponent}</button>
        </div>
        

    )
    
}