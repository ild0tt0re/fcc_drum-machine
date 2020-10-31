import React from 'react'
import './MetalSlider.scss'

export default function MetalSlider({volume, handleVolumeChange}) {
    const handleProgressChange = (e) => {
        const newVolume = e.currentTarget.value
        handleVolumeChange(newVolume)
    }

    return (
        <input type="range" value={volume} onChange={handleProgressChange} />
    )
}
