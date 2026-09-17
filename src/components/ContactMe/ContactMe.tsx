import React, { useState } from "react";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import websiteData from "../../data/websiteData.json";

interface ContactMeProps {
  // Define any props if needed, but not specified in the original file
}

const ContactMe: React.FC<ContactMeProps> = () => {
  const [resStatus, setResStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHireMe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setResStatus("Thanks for choosing me! I'll get back to you soon.");
        setIsSubmitting(false);
      } else {
        setResStatus("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    };
    xhr.send(data);
  };

  // Icon mapping function
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      FaEnvelope: <FaEnvelope className="text-white text-sm" />,
      FaMapMarkerAlt: <FaMapMarkerAlt className="text-white text-sm" />,
      FaPhone: <FaPhone className="text-white text-sm" />,
      FaLinkedin: <FaLinkedin className="text-sm" />,
      FaGithub: <FaGithub className="text-sm" />,
    };
    return iconMap[iconName] || <FaEnvelope className="text-white text-sm" />;
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {websiteData.contact.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed day-theme:text-slate-700">
            {websiteData.contact.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {websiteData.contact.contactInfo.map((contact) => (
            <div
              key={contact.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group day-theme:bg-white/20 day-theme:border-slate-300/50 day-theme:hover:bg-white/30"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {getIcon(contact.icon)}
              </div>
              <h4 className="text-purple-300 font-semibold text-sm mb-1 day-theme:text-purple-700">
                {contact.label}
              </h4>
              <p className="text-gray-300 text-xs day-theme:text-slate-700">
                {contact.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 day-theme:bg-white/20 day-theme:border-slate-300/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {websiteData.contact.formTitle}
            </h3>
            <p className="text-gray-300 text-sm day-theme:text-slate-700">
              {websiteData.contact.formSubtitle}
            </p>
          </div>

          <form
            onSubmit={handleHireMe}
            action={websiteData.contact.formConfig.action}
            method={websiteData.contact.formConfig.method}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 day-theme:bg-white/80 day-theme:border-slate-300/50 day-theme:text-slate-900 day-theme:placeholder-slate-500"
                />
                <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm" />
              </div>

              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 day-theme:bg-white/80 day-theme:border-slate-300/50 day-theme:text-slate-900 day-theme:placeholder-slate-500"
                />
                <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm" />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project, timeline, and budget..."
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none day-theme:bg-white/80 day-theme:border-slate-300/50 day-theme:text-slate-900 day-theme:placeholder-slate-500"
              />
              <FaPaperPlane className="absolute right-4 top-4 text-purple-400 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 overflow-hidden group shimmer-effect"
            >
              {/* Shimmer Effect - now handled by CSS */}
              {/* Button Content */}
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </div>
            </button>

            {resStatus && (
              <div
                className={`mt-4 p-4 rounded-xl border text-sm ${
                  resStatus.includes("Thanks")
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                }`}
              >
                {resStatus}
              </div>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm mb-4 day-theme:text-slate-600">
            Or connect with me on social platforms
          </p>
          <div className="flex justify-center gap-4">
            {websiteData.contact.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target={social.platform === "Email" ? "_self" : "_blank"}
                rel={social.platform === "Email" ? "" : "noopener noreferrer"}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                {getIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-6 border-t border-white/10 day-theme:border-slate-300/50">
          <p className="text-gray-400 text-xs day-theme:text-slate-600">
            {websiteData.contact.footer.text}{" "}
            <span className="text-purple-400 font-semibold">
              {websiteData.contact.footer.author}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
