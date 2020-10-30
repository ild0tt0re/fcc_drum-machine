import React from 'react'
import './SegmentDisplay.scss'

export default function SegmentDisplay() {
    return (
        <div>
            <h3>DSEG7-Modern</h3>
            <p style={{ fontFamily: 'DSEG7-Modern' }}>
                <span style={{ fontWeight: 200 }}>123abc</span>
                <span style={{ fontWeight: 'normal' }}>123abc</span>
                <span style={{ fontWeight: 'bold' }}>123abc</span>
                <br />
            </p>
        </div>
    )
}
