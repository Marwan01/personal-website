import React from "react";

var progress = {
  Advanced: 100,
  Intermediate: 66,
  Basic: 33
};

function ProgressBar(props) {
  return (
    <div>
      <span className="title is-5 is-spaced">{props.text}</span>
      <span className="is-6 skill-percentage">{props.level}</span>
      <progress
        className="progress"
        value={progress[props.level]}
        max="100"
      >
        {progress[props.level]}%
      </progress>
    </div>
  );
}

export default ProgressBar;
