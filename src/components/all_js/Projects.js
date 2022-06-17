import React from "react";
import "./Projects.css";
import img1 from "./Project1.png";
import img2 from "./Project2.png";
function Projects() {
  return (
    <>
      <div className="ProjectBody">
        <div className="ProjectHead">
          <h1 className="ProjectSub-head">My Projects</h1>
        </div>
        <div className="Project-listings">
          <div class="card">
            <img src={img1} alt="Avatar" class="Image"></img>
            <div class="container">
              <h4>
                <b>
                  <a
                    href="https://open-board-done-project.herokuapp.com/"
                    target="_blank"
                  >
                    Collaborative Board
                  </a>
                </b>
              </h4>
              <p>
                It is build using HTML, CSS and JavaScript. Canvas API of HTML
                is used to allow drawing 2D graphics and Socket IO is used to
                allow multiple users to make changes to the same board, visible
                to other.
              </p>
            </div>
          </div>
          <div class="card">
            <img src={img2} alt="Avatar" class="Image"></img>
            <div class="container">
              <h4>
                <b>
                  <a
                    href="https://playful-zabaione-0c5ab4.netlify.app/"
                    target="_blank"
                  >
                    Ping-Pong Game
                  </a>
                </b>
              </h4>
              <p>
                It is a ping-pong game built using JavaScript and animation is
                used to move the ball.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
