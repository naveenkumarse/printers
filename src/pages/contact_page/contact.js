import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a761hvb",
        "template_2l4dyqq",
        form.current,
        "MQDVazvgeAEMjmPuf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        
        <input type="submit" value="Send" />

      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>

    </StyledContactForm>
  )
}

export default Contact;

// Styles
const StyledContactForm = styled.div`
  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 30%;
    font-size: 16px;
    margin-left:500px;


    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: var(--light-blue);
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(30,144,255);
      color: white;
      border: none;
      width: 80px;
      align-content:center;
      justify-content:center;
    }
  }
`
