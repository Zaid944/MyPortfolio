import React from "react";
import "./Landing.css";
import img from "./MyPhotoOg.jpg";
function Landing() {
  return (
    <>
    <div className = "ParentArea">
      <div className="MainArea">
          <div className = "image">
              <img src = {img}></img>
          </div>
        <div className = "Text">
          <p>
            Hey, I Am Zaid Akhter, I am a Competitive programmer and a web
            development enthusiast.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Landing;
