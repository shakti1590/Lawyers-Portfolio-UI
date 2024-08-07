import React from "react";

const Contactpage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center ">
          <p className="text-[#4F46E5] font-extrabold text-xl dark:text-blue-400">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Get in touch
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Our friendly team is always here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800  dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Our friendly team is here to help.
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              helpdesk@gha.org.in
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Office
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              C2, Lane No.2, Chankya Colony, Fazalngaj, Sasaram, Rohtas, Bihar
              821115
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Phone
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Mon-Fri from 9am to 5pm.
            </p>
            <p className="mt-2 text-blue-500 dark:text-blue-400">
              +91 9473196196
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg h-96 ml-10 lg:h-auto">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57878.204802734086!2d83.93101693663942!3d24.952917248763708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db0cc8035805f%3A0x186db1ffca1ea333!2sSasaram%2C%20Bihar%20821115!5e0!3m2!1sen!2sin!4v1720712908851!5m2!1sen!2sin" loading="lazy"
          ></iframe>
        </div>
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
          <h1 className="text-lg text-center font-bold text-gray-700">
            What do you want to ask ?
          </h1>
          <form className="mt-6 h-96 lg:h-auto">
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-600 font-semibold dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-600 font-semibold dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-600 font-semibold dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-20 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F46E5] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;