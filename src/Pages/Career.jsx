import React from "react";

const JobOpeningSection = () => {
  return (
    <div className="p-8 bg-white">
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-black mb-4">
            Let's make you official
          </h1>
          <p className="text-lg mb-4">
            At Green House Association, we believe in fostering a dynamic and
            inclusive work environment where every team member can thrive. Our
            success is driven by our talented and dedicated staff, and we're
            always on the lookout for passionate individuals to join our growing
            team. If you’re ready to make a difference and contribute to a
            company that values innovation, integrity, and customer
            satisfaction, we’d love to hear from you.
          </p>
          <button className="bg-[#4F46E5] text-white text-lg font-bold py-2 px-4 rounded-full">
            See current openings
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507"
              alt="Video thumbnail"
              className="rounded-md shadow-lg w-90 h-80"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 22V2l18 10-18 10z" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-black font-bold mb-4">
          Current Opportunities For Internship
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            "Senior Accountant",
            "Compliance Specialist",
            "Client Relations Manager",
            "Junior Accountant",
            "Compliance Sr. Specialist",
            "Business Manager",
          ].map((role) => (
            <button
              key={role}
              className="bg-[#4F46E5] text-white font-bold py-2 px-4 rounded-lg"
            >
              {role}
            </button>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">How To Apply:</h3>
        <p className="text-lg mb-8">
          If you are interested in joining our team, please send your resume and
          a cover letter to career@gha.org.in. In your cover letter, tell us why
          you are passionate about working at Green House Association and how
          your skills and experience align with our needs.
        </p>
        <button className="bg-[#4F46E5] text-white text-lg font-bold py-2 px-4 rounded-full mb-8">
          Apply Now
        </button>
        <h3 className="text-2xl font-bold text-black mb-2">
          Contact Information:
        </h3>
        <p className="text-lg mb-8">
          We look forward to hearing from you and exploring how we can achieve
          great things together.
        </p>
        <p className="text-lg mb-2 text-black">
          <strong>Email:</strong> career@gha.org.in
        </p>
        <p className="text-lg text-black mb-8">
          <strong>Phone:</strong> +91 9473196196
        </p>
        <p className="text-lg mb-8 text-black">
          Join us at <strong>Green House Association</strong> and be a part of a
          dynamic team that is shaping your future.
          <br /> Your journey to a rewarding career begins here!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="border p-2 rounded-lg w-full"
                name="fullName"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="border p-2 rounded-lg w-full"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-2">
                Phone No.
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone No."
                className="border p-2 rounded-lg w-full"
                name="phoneNumber"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-2">
                Select Role
              </label>
              <select
                id="role"
                className="border p-2 rounded-lg w-full"
                placeholder="Select Role"
                required
              >
                <option>Client Relations Manager</option>
                <option>Compliance Specialist</option>
                <option>Senior Accountant</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="resume" className="block mb-2">
                Upload Your Resume
              </label>
              <input
                type="file"
                id="resume"
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#4F46E5] text-white text-lg font-bold py-2 px-4 rounded-full "
            >
              Apply Now
            </button>
          </form>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906"
              alt="People talking"
              className="rounded-lg shadow-lg w-90 h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpeningSection;
