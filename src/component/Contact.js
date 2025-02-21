import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});
  const [messageErr, setMessageErr] = useState({});
  const [subjectErr, setSubjectErr] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  var pattern = new RegExp(/^[0-9\b]+$/);

  const submit = (e) => {
    console.log("object submit")
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch(
        `${process.env.REACT_APP_CMS_URL1}contact_form?fields=*.*.*`,
        {
          method: "POST",
          body: JSON.stringify({ full_name: name, email, mobile, subject , message }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
        .then((response) => {
          response.json();
          if (response.status === 200) {
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
            setSubject("")
            setSuccessMessage("Form submitted successfully!"); // Set the success message
          }
        })
        // .then((json) =>
        //     addToast("form submitted Sucessfully", {
        //         appearance: "success",
        //         autoDismiss: true,
        //     })
        // )
        .catch((err) => console.log(err));
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const mobileErr = {};
    const messageErr = {};
    const subjectErr = {};
    let isValid = true;

    if (name === "") {
      nameErr.firstNameEmpty = "Name is required";
      isValid = false;
    } else if (name.trim().length < 3) {
      nameErr.firstNameShort = "Full name is too short";
      isValid = false;
    }
    if (email === "") {
      emailErr.emailEmpty = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailErr.emailerror = "You have entered a wrong email";
      isValid = false;
    }
    if (mobile === "") {
      mobileErr.mobileEmpty = "Contact is required";
      isValid = false;
    } else if (!pattern.test(mobile)) {
      mobileErr.mobilenumbershort = "Mobile number should be numeric";
      isValid = false;
    } else if (mobile.trim().length !== 10) {
      mobileErr.mobilenumbershort = "Mobile number should be of ten digit";
      isValid = false;
    }
    if (subject === "") {
      subjectErr.firstNameEmpty = "write subject";
      isValid = false;
    } 
    if (message === "") {
      messageErr.messageEmpty = "Message is required";
      isValid = false;
    } else if (message.trim().length < 5) {
      messageErr.mobilenumbershort = "Message length should be 5 words or more";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMobileErr(mobileErr);
    setMessageErr(messageErr);
    setSubjectErr(subjectErr)
    return isValid;
  };

  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1> Contact Us</h1>
          <p>Doctor {" > "} Contact Us </p>
        </div>
      </div>

      <div className="contact">
        <div className="contact-row">
          <div className="contact-col">
            <h2>Our Clinic Inforamtion</h2>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-location-dot"></i>
              <div className="contact-cont">
                <h5>Location</h5>
                <p>
                  # Dr. Agrawal Clinic and Eye Care Center
                  <br />
                  Dr. Saket Agrawal C/o Anil Agencies, Below Ashoka Hotel, Bus
                  stand road, Mandla
                </p>
                <iframe
                  title="maplink"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.4047055050863!2d77.08447659565104!3d23.19800852412411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf3346411e88b%3A0x6eaecf44ea5a93a7!2sShree%20Nath%20Ji%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740127293484!5m2!1sen!2sin"
                  width="100%"
                  height="auto"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <h5>Call Us</h5>
                <p>
                  <a href="tel: 9479663683 ">9479663683</a> ,{" "}
                </p>
              </div>
            </div>
            <div className="contact-col-l">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>
                  <a href="mailto: saket_agrawal89@yahoo.co.in">
                    saket_agrawal89@yahoo.co.in
                  </a>{" "}
                </p>
              </div>
            </div>
            <div className="contact-col-l">
              {/* <i class="fa-solid fa-envelope"></i> */}
              <span>
                {" "}
                <FaFacebook />
              </span>
              <div>
                <h5>Facebook</h5>
                <p>
                  <a
                    href="https://www.facebook.com/dragrawaleyecare"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/dragrawaleyecare
                  </a>{" "}
                </p>
              </div>
            </div>
            <div className="contact-col-l">
              <span>
                <BsGoogle />
              </span>
              <div>
                <h5>Google</h5>
                <p>
                  <a
                    href="https://g.co/kgs/J9i5AZ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://g.co/kgs/J9i5AZ
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="contact-col contact-col-r">
            <h1>Enquiry Now.</h1>

            <form 
              onSubmit={submit}
            action="#" method="POST">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    autoComplete="off"
                    // required
                  />
                  {Object.keys(nameErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {nameErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div class="col">
                  <input
                    type="number"
                    name="mobile"
               
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    class="form-control"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    autoComplete="off"
                    // required
                  />
                  {Object.keys(mobileErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {mobileErr[key]}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    autoComplete="off"
                    // required
                  />
                  {Object.keys(emailErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {emailErr[key]}
                      </div>
                    );
                  })}
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                    autoComplete="off"
                    // required
                  />
                     {Object.keys(subjectErr).map((key) => {
                    return (
                      <div
                        style={{
                          color: "red",
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        {subjectErr[key]}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="form-control"
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
                {Object.keys(messageErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {messageErr[key]}
                    </div>
                  );
                })}
                {successMessage && (
                  <div
                    style={{
                      color: "green",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    {successMessage}
                  </div>
                )}
                <label for="floatingTextarea">Message</label>
              </div>
              <div className="send-msg">
                <button
                  type="submit"
                  name="submit"
                  value="send"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
