import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const from_name = formData.get("from_name");
    const from_email = formData.get("from_email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const newErrors = {};
    if (!from_name.trim()) newErrors.name = "Name is required";
    if (!from_email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; 

    setLoading(true);

    emailjs
      .sendForm(
        "service_vj95yon",
        "template_pdsvix7",
        form.current,
        { publicKey: "zJurTrX35D6rWhRYf" }
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <>
      {/* Section Title */}
      <section
        id="contact"
        className="bg-black text-white py-32 flex items-center justify-center"
      >
        <h2
          className="text-5xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f97316 20%, #0f766e 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Contact Us
        </h2>
      </section>

      {/* Get In Touch & Form Section */}
      <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold text-teal-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-700 mb-8 max-w-md">
              Contact us for any questions using the info below or fill the
              contact form and we’ll get back to you shortly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-teal-700 p-3 rounded">
                  <PhoneIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600 text-sm">08034031530</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-teal-700 p-3 rounded">
                  <EnvelopeIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 text-sm">
                    tech@picmedigital.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-teal-700 p-3 rounded">
                  <MapPinIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600 text-sm">Edo State, Nigeria</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <div className="bg-teal-700 p-3 rounded">
                  <CameraIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-gray-600 text-sm">@picmedigital</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 border-t pt-6 border-gray-300">
              <p className="font-semibold text-teal-800 mb-2">Social Media</p>
              <div className="flex space-x-4 text-2xl text-teal-700">
              

    <a
      href="https://x.com/picmedigital"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PicMe on X"
      className="hover:text-orange-400 transition"
    >
      <i className="fab fa-x-twitter" />
    </a>

    <a
      href="https://www.instagram.com/picmedigital"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PicMe on Instagram"
      className="hover:text-orange-400 transition"
    >
      <i className="fab fa-instagram" />
    </a>

    <a
      href="https://www.youtube.com/@picmedigital"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PicMe on YouTube"
      className="hover:text-orange-400 transition"
    >
      <i className="fab fa-youtube" />
      </a>
      <a
  href="https://www.tiktok.com/@picmedigital"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="PicMe on TikTok"
  className="hover:text-orange-400 transition"
>
  <i className="fab fa-tiktok" />
</a>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your full name"
                  className="w-full border border-teal-600 rounded px-4 py-2 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Enter your email"
                    className="w-full border border-teal-600 rounded px-4 py-2 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Optional"
                    className="w-full border border-teal-600 rounded px-4 py-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-teal-600 rounded px-4 py-2 focus:outline-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && (
                <p className="text-teal-700 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
