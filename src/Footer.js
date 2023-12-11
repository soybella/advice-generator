import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Challenge from{" "}
        <a
          href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Frontend Mentor{" "}
        </a>
        <span>
          {" "}
          coded with ♥ by{" "}
          <a
            href="https://github.com/soybella/advice-generator"
            target="_blank"
            rel="noreferrer"
          >
            Isabella Lizarde
          </a>
        </span>
      </p>
    </div>
  );
}
