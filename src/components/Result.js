import React from "react";
import { Link } from "react-router-dom";
import './Result.css';

function Result(props) {
  return (
    <div className="result-container">
      <Link to={'/location/' + props.url} name={props.name} className="result-content" data-testid={`link-${props.url}`}>{props.name}</Link>
    </div>
  )
};

export default Result;