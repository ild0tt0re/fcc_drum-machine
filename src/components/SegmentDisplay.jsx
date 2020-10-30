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
            <div className="text-center">
                <div class="Clock-Wrapper">
                    <span className="Clock-Time-Background D14M">8888888<span style={{ fontSize: '30' }}>88</span></span>
                    <span id="DSEGClock" className="Clock-Time-Front D14M">Closed!HH</span>
                    <span className="Clock-Year-Background"><span className="D14M">8888888888</span><span className="D14M"> ~~~</span></span>
                    <span id="DSEGClock-Year" className="Clock-Year-Front"><span className="D14M">Ch:!A</span><span class="D14M">!!!!Vol:64</span></span>
                </div>
            </div>
        </div>
    )
}
