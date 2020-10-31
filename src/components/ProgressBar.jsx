import React from 'react'
import './ProgressBar.scss'

export default function ProgressBar({volume}) {
    return (
        <progress value={volume/100}></progress>
    )
}
