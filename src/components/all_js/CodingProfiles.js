import React from 'react'
import './Code.css'
import img1 from "./LeetCode.png";
import img2 from "./codeforces.png";
import img3 from "./Codechef.png";
function CodingProfiles() {
  return (
    <>
      <div className="CodeMain">
        <div className="CodeHead">
          <h1>Coding Profiles</h1>
        </div>
        <div className="CodeCards">
          <div class="cardNew">
            <img src={img1} alt="Avatar" class="ImageNew"></img>
            <div class="containerNew">
              <h4>
                <a href="https://leetcode.com/zaid25akhter/" target="_blank">
                  <b>LeetCode</b>
                </a>
              </h4>
            </div>
          </div>
          <div class="cardNew">
            <img src={img2} alt="Avatar" class="ImageNew"></img>
            <div class="containerNew">
              <h4>
                <a
                  href="https://codeforces.com/profile/Zaid_25"
                  target="_blank"
                >
                  <b>CodeForces</b>
                </a>
              </h4>
            </div>
          </div>
          <div class="cardNew">
            <img src={img3} alt="Avatar" class="ImageNew"></img>
            <div class="containerNew">
              <h4>
                <a href="https://www.codechef.com/users/zaidakhter" target = "_blank">
                  <b>CodeChef</b>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingProfiles