import React from "react";
import { Link } from "react-router-dom";
import './Result.css';

function Result(props) {
  return <Link to={'/location/' + props.url} name={props.name} className="result" data-testid={`link-${props.url}`}>{props.name}</Link>
};

export default Result;