import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [success, setSuccess] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_nijshpo", "template_x7th2ll", form.current, {
        publicKey: "PHaTMg-OPjKuJ5dnO",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);

          setSuccess(false);
        }
      );
  }

  return (
    <section id="contact">
      <p className="title">Contact</p>
      <div className="contact-box">
        <div className="text-content">
          <p className="margin-bottom-md">
            Thank you for your interest in getting in touch!
          </p>
          <p className="margin-bottom-md">
            I value open communication and welcome any inquiries, feedback, or
            collaboration opportunities. Please don&apos;t hesitate to get in
            touch with me by filling out the contact form.
          </p>
          <p>📩 My mail: tarunv1911@gmail.com</p>
        </div>
        <div>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="simple-flex">
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="input-small"
              />
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                className="input-small"
              />
            </div>
            <div>
              <textarea
                type="text"
                id="message"
                name="message"
                className="input-big"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="input-button">
              Submit
            </button>
            {success &&
              alert(
                "Email set successfully! We will reach back to you shortly"
              )}
          </form>
        </div>
      </div>
    </section>
  );
}
