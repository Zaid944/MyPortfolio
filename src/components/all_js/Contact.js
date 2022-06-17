import React from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';
import Navbar from './Navbar';

function Contact() {
  function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
          "service_ekix064",
          "template_u3wsemh",
          e.target,
          "LPMM3zGBySSMNxvUc"
        ).then(res=>{
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
    <>
      <div class="MainForm">
        <form onSubmit={sendEmail}>
          <div class="Form-Heading">
            <h1>Contact-Me</h1>
          </div>
          <div class="Form-Body">
            <div class="FullName">
              <div class="NameText">
                <label>Full Name</label>
              </div>
              <div class="NameEntry">
                <input type="text" name= "name" required></input>
              </div>
            </div>
            <div class="Email">
              <div class="EmailText">
                <label>E-Mail</label>
              </div>
              <div class="EmailEntry">
                <input type="text" name = "email" required></input>
              </div>
            </div>
            <div class="Message">
              <div class="MessageText">
                <label>Message</label>
              </div>
              <div class="MessageEntry">
                <textarea name = "message" required></textarea>
              </div>
            </div>
            <div class="MyButton">
              <button>Send</button>
            </div>
          </div>
        </form>
      </div>
      
    </>
  );
}

export default Contact