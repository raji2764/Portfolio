import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import EmailMarketing from "../assets/EmailMarketing.gif";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setIsFormValid(false);
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_n97x8pd";
    const templateId = "template_hnahyvl";
    const publicKey = "wu-kAasGjOysmvm5O";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rajalakshmi Ganesh",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setName("");
          setEmail("");
          setMessage("");
          setIsFormValid(true);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center border-spacing-2 border-b-2 border-b-blue-600 my-10">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row lg:w-[70%] items-center justify-around">
        <div className="w-full md:w-[100%] lg:w-[500px] p-5">
          <div className="relative rounded-lg bg-white bg-opacity-60 backdrop-blur-sm p-8 sm:p-12 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="mb-6">
                <input
                  className={`border-2 border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-400 ${
                    !isFormValid && !name ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setIsFormValid(true);
                  }}
                />
              </div>
              <div className="mb-6">
                <input
                  className={`border-2 border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-400 ${
                    !isFormValid && !email ? "border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsFormValid(true);
                  }}
                />
              </div>
              <div className="mb-6">
                <textarea
                  className={`border-2 border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-400 ${
                    !isFormValid && !message ? "border-red-500" : ""
                  }`}
                  cols="30"
                  rows="10"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setIsFormValid(true);
                  }}
                />
              </div>
              <div>
                <Button
                  className="bg-purple-500 text-white flex justify-center gap-2 items-center"
                  fullWidth
                  type="submit"
                >
                  Send Message
                </Button>
                <div>
                  {!isFormValid && (
                    <p className="text-red-500 text-center mt-2">
                      Please fill out all fields
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-[500px] lg-max:hidden">
          <img
            className="hidden lg:block h-full w-full lg:h-[500px] lg:w-[500px]"
            src={EmailMarketing}
            alt="contactimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
