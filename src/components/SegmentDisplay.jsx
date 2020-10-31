import React from 'react';
import './SegmentDisplay.scss';

export default function SegmentDisplay({ clipName, volume }) {
  return (
    <div id="display">
      <div className="text-center">
        <div className="display-wrapper">
          <span className="display-bottom-bg D14M">
            8888888<span style={{ fontSize: '30' }}>88</span>
          </span>
          <span className="display-bottom-front D14M">
            {clipName}
          </span>
          <span className="display-head-bg">
            <span className="D14M">8888888888</span>
            <span className="D14M"> ~~~</span>
          </span>
          <span className="display-head-front">
            <span className="D14M">Ch:!A</span>
            <span className="D14M">
              !!!Vol:{volume.toString().padStart(3, 0)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
