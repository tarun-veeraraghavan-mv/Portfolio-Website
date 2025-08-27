import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormStatus = ({ status }) => {
  if (status === "success") {
    return <p className="form-status-success">Email sent successfully! We will get back to you shortly.</p>;
  }

  if (status === "error") {
    return <p className="form-status-error">Failed to send email. Please try again later.</p>;
  }

  return null;
};

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("sending");

    emailjs
      .sendForm(
        "service_nijshpo",
        "template_x7th2ll",
        form.current,
        "PHaTMg-OPjKuJ5dnO"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact">
      <p className="title">Contact</p>
      <div className="contact-wrapper">
        <div className="contact-text-container">
          <p className="margin-bottom-md">
            I value open communication and welcome any inquiries, feedback, or
            collaboration opportunities. Please don't hesitate to get in
            touch with me by filling out the contact form.
          </p>
          <p>📩 My mail: tarunv1911@gmail.com</p>
        </div>
        <div className="contact-form-container">
          <form ref={form} onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
                className="input-small"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                className="input-small"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="input-big"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="error-text">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="input-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
            <FormStatus status={status} />
          </form>
        </div>
      </div>
    </section>
  );
}