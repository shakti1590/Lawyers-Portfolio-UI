import React from 'react';
import Logo from '../assets/img/PEN NIB  white.png';
const Footer = () => {
  return (
        <footer className="w-full py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
        >
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2
              className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
            >
              Connect with us
            </h2>
            <p className="text-xl text-indigo-100">
              Contact us with any query or any idea.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
            >Get In Touch
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#4F46E5"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
            <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href="#"  className="flex justify-center lg:justify-start">
                        <img src={Logo} alt="Logo" className="h-20 w-auto"></img>
                    </a>
                    <p className="py-8 text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <a href="javascript:;"  className="py-2.5 px-5 h-9 block w-fit font- bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-bold mb-7">Quick Links</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">About</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Careers</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Blogs</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-bold mb-7">Top Services</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Accounting</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Labour License</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Income Tax </a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">EPF</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Fassai</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-bold mb-7">Legal Cases</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">Drafting</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Notice Reply</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Appeal</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Trubunal</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">High Court</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-bold mb-7">Support</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 whitespace-nowrap hover:text-gray-900">Customer Support</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Cookies</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">License</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Terms & Conditions</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 whitespace-nowrap hover:text-gray-900">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Green House Associates</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">instagram page</span>
              </a>       
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
