import React from "react";
import "./Newbutton.css";
import { Link } from "react-router-dom";

export default function NewButton() {
  return (
    <div>
      <Link to="/versus">
        <button class="button-55">
          Take me to the answer for all of my NBA-related problems.....
        </button>
      </Link>
    </div>
  );
}
