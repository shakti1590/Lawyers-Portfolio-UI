import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
            Know more about us
          </h2>
          <p className="mb-4">
            Green House Association is dedicated to providing a comprehensive
            range of professional services tailored to meet the diverse needs of
            businesses and individuals. Our expertise spans across various
            domains including accounting, licensing, and regulatory compliance.
            With a commitment to excellence and a focus on client satisfaction,
            we ensure that our clients receive reliable and efficient services
            that empower them to achieve their goals.
          </p>
          <p>
            Whether you're a startup needing initial setup assistance or an
            established business seeking to optimize your operations, Green
            House Association is your trusted partner for success.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          ></img>
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          ></img>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex justify-center mt-16">
        <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
          <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-[#4F46E5] text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
              Why Choose Us
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Choose Green House Association for a trusted partnership that
              supports your business at every step.
            </h4>
            <ul className="list-disc list-inside text-black dark:text-gray-400">
              <li>Expertise and Experience</li>
              <li>Client-Centric Approach</li>
              <li>Comprehensive Services</li>
              <li>Reliability and Efficiency</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mission, Vision, and Values Section */}
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
        {/* <div className="text-center">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Mission, Vision, and Values
          </h2>
        </div> */}
        <div className="grid gap-16 mt-8 mb-5  lg:grid-cols-3">
          <div className="bg-white hover:bg-[#EFF6FF] dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <FaBullseye className="mx-auto mb-4 text-4xl text-black dark:text-white" />
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              Mission
            </h3>
            <p className="text-black dark:text-gray-400">
              Empowering businesses with expert services in accounting,
              compliance, and licensing, ensuring sustainable growth and
              long-term success. We strive to provide tailored solutions that
              meet the unique needs of each client, enabling them to focus on
              their core operations and achieve their goals. Our mission is to
              be a reliable partner, guiding businesses through regulatory
              complexities.
            </p>
          </div>
          <div className="bg-[#4F46E5] dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <FaEye className="mx-auto mb-4 text-4xl text-white dark:text-white" />
            <h3 className="mb-4 text-2xl font-semibold text-white dark:text-white">
              Vision
            </h3>
            <p className="text-white dark:text-gray-400 justify-normal">
              To be the premier provider of comprehensive business solutions,
              fostering growth and excellence for our clients. We aim to set the
              industry standard for quality and reliability, becoming a trusted
              partner for businesses of all sizes. Our vision is to create a
              positive impact on the business community by helping organizations
              thrive in a competitive landscape.
            </p>
          </div>
          <div className="bg-white hover:bg-[#EFF6FF] dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <FaHeart className="mx-auto mb-4 text-4xl text-black dark:text-white" />
            <h3 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              Values
            </h3>
            <p className="text-black dark:text-gray-400">
              Integrity, excellence, client-centricity, and innovation guide our
              commitment to delivering top-notch services and building lasting
              relationships. We uphold the highest ethical standards in all our
              interactions, continuously strive for improvement, and focus on
              understanding and meeting the unique needs of our clients while
              embracing new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
