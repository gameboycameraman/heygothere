import React from "react";
import { Link } from "react-router-dom";
import './Result.css';

function Result(props) {
  return <Link to={'/location/' + props.url} name={props.name}>{props.name}</Link>
};

export default Result;