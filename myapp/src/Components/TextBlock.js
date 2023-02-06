import React from 'react';
import './TextBlock.css';


function TextBlock(props) {
  return (
    <div className="text-block">
      <div className="text-block-content">
        <h2 className="text-block-title">{props.title}</h2>
        <p className="text-block-description">{props.description}</p>
      </div>
    </div>
  );
}

export default TextBlock;