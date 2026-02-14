import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [showOtherService, setShowOtherService] = useState(false);
  const [otherServiceValue, setOtherServiceValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleServiceChange = (e) => {
    if (e.target.value === "Other") {
      setShowOtherService(true);
    } else {
      setShowOtherService(false);
      setOtherServiceValue("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (showOtherService) {
      const serviceInput = formRef.current.querySelector('[name="service"]');
      serviceInput.value = otherServiceValue;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setModalType("success");
          setShowModal(true);
          formRef.current.reset();
          setShowOtherService(false);
          setOtherServiceValue("");
        },
        (error) => {
          console.error(error);
          setModalType("error");
          setShowModal(true);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out for fiber leasing or connectivity solutions.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name & Company */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="yourmail@example.com"
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  required
                  onChange={handleServiceChange}
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="Fiber Leasing">Optical Fiber Leasing</option>
                  <option value="Connectivity">End-to-End Connectivity</option>
                  <option value="Maintenance">Fiber Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Other Service Input (appears when "Other" is selected) */}
              {showOtherService && (
                <div className="animate-[slideDown_0.3s_ease-out]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please specify the service *
                  </label>
                  <input
                    type="text"
                    value={otherServiceValue}
                    onChange={(e) => setOtherServiceValue(e.target.value)}
                    placeholder="Enter your custom service"
                    required
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              )}

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City / Route"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Requirement
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project or requirements..."
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-b from-[#0B1C2D] via-[#0E2F4F] to-[#0a1a23] text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-[scale-in_0.3s_ease-out]">
            {modalType === "success" ? (
              <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  Oops!
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Failed to send message. Please try again.
                </p>
              </>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
