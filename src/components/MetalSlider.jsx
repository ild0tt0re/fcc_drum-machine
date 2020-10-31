import React from 'react'
import './MetalSlider.scss'

export default function MetalSlider({handleVolumeChange}) {
    const handleProgressChange = (e) => {
        const newVolume = e.currentTarget.value
        handleVolumeChange(newVolume)
    }

    return (
        <input type="range" onChange={handleProgressChange} />
    )
}
