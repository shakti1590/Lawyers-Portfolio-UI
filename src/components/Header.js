import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/img/gha.png";
import menuItems from "./menuItems";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };
  // console.log(menuItems);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto md:hidden" src={Logo} alt="Mobile Logo" />
              <img className="h-12 w-auto hidden md:block" src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              href="#"
              className="flex items-center text-black px-3 py-2 rounded-md text-sm font-medium hidden md:flex"
            >
              <svg
                className="h-6 w-6 mr-2"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 891.024 891.024"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8 l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9 c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75 l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7 C1,142.575-3.5,162.675,2.8,180.875z"></path>
                  </g>
                </g>
              </svg>
              +91 9473196196
            </a>
            <button className="ml-3 bg-black hover:bg-[#4F46E5] hidden md:block text-white px-3 py-2 rounded-full text-sm font-medium">
              Sign in
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-[#4F46E5] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mega menu code */}
{/* <div className='group'>
                            <button className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer'>Products</button>
                            <div className='hidden group-hover:flex flex-col absolute left-0 top-16 p-10 w-full bg-white z-20 text-black duration-300'>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>

                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>

                                    <div className='flex flex-col'>
                                        <h3 className='mb-4 text-2xl text-pink-400'>Beauty Products</h3>
                                        <a href="" className='hover:underline hover:text-pink-400'>Makeup Kit</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Lotion</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Body Wash</a>
                                        <a href="" className='hover:underline hover:text-pink-400'>Face Pack</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

<div className="bg-gray-100 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="hidden md:flex space-x-4">
        <a href="/"><span className="hover:bg-[#4F46E5] hover:text-white text-black px-3 py-2 rounded-md text-sm font-semibold flex items-center">Home</span></a>
        {Object.keys(menuItems).map((item) => (
          <div key={item}>
            <button
              onClick={() => handleDropdownToggle(item)}
              className="hover:bg-[#4F46E5] hover:text-white text-black px-3 py-2 rounded-md text-sm font-semibold flex items-center"
            >
              {item}
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen === item && Array.isArray(menuItems[item]) && (
              <div
                className={`absolute z-10 max-h-[750px] w-full inset-x-0 rounded-md shadow-lg bg-white transform scale-100 opacity-100 md:block `}
              >
                <div className="flex justify-evenly m-4">
                  {item === "Business" ? (
                    <>
                      <div className="p-4">
                        {menuItems[item].slice(0, 4).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">
                                {subItem.heading}
                              </h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="pt-24 last:pb-8">
                          <a
                            href="/help-me-decide"
                            className="inline-flex justify-center items-center rounded-full bg-transparent text-black border-black hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white ui-focus-visible:bg-default-response ui-focus-visible:border-default-response ui-focus-visible:text-white active:bg-muted active:border-muted active:text-white focus:outline-0 ui-focus-visible:outline-1 border-4 font-semibold py-2 px-6"
                            title="Help me decide"
                            rel="nofollow"
                          >
                            <span>Help me decide</span>
                            <svg
                              viewBox="0 0 15 15"
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline-block h-4 pl-2"
                            >
                              <path
                                d="m7.926 13 5.5-5.5-5.5-5.5M1.218 7.5h12.208"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="p-4">
                        {menuItems[item].slice(4, 7).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">
                                {subItem.heading}
                              </h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        {menuItems[item].slice(7, 11).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">
                                {subItem.heading}
                              </h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted  hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        {menuItems[item].slice(11).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">
                                {subItem.heading}
                              </h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : item === "Support" ? (
                    <>
                      <div className="p-4">
                        {menuItems[item].slice(0,1).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        {menuItems[item].slice(1,2).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        {menuItems[item].slice(2, 4).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      {menuItems[item].slice(4).map((subItem, index) => (
                        <div className="p-4" key={index}>
                          <a
                            href={subItem.link}
                            className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                          >
                            <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                          </a>
                          {Array.isArray(subItem.items) && (
                            <div className="mt-2">
                              {subItem.items.map((it, idx) => (
                                <a
                                  className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                  key={idx}
                                  href={it.link}
                                >
                                  {it.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                                    
                  ) : item === "Resources" ? (
                    <>
                      <div className="p-4">
                        {menuItems[item].slice(0, 2).map((subItem, index) => (
                          <div key={index} className="mb-4">
                            <a
                              href={subItem.link}
                              className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                            >
                              <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                            </a>
                            {Array.isArray(subItem.items) && (
                              <div className="mt-2">
                                {subItem.items.map((it, idx) => (
                                  <a
                                    className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                    key={idx}
                                    href={it.link}
                                  >
                                    {it.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      {menuItems[item].slice(2).map((subItem, index) => (
                        <div className="p-4" key={index}>
                          <a
                            href={subItem.link}
                            className={`text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2 `}
                          >
                            <h2 className="text-lg font-semibold">{subItem.heading}</h2>
                          </a>
                          {Array.isArray(subItem.items) && (
                            <div className="mt-2">
                              {subItem.items.map((it, idx) => (
                                <a
                                  className={`text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline `}
                                  key={idx}
                                  href={it.link}
                                >
                                  {it.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                              
                  ) : (
                    <>
                      {menuItems[item].map((subItem, index) => (
                        <div key={index} className="p-4">
                          <a
                            href={subItem.link}
                            className="text-black hover:text-muted ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block my-2 py-2"
                          >
                            <h2 className="text-lg font-semibold">
                              {subItem.heading}
                            </h2>
                          </a>
                          {Array.isArray(subItem.items) && (
                            <div className="mt-2">
                              {subItem.items.map((it, idx) => (
                                <a
                                  className="text-black hover:text-muted hover:text-[#4F46E5] ui-focus-visible:text-muted active:text-default-response transform transition ease-in-out duration-200 focus:outline-0 ui-focus-visible:outline-1 block py-1 hover:underline"
                                  key={idx}
                                  href={it.link}
                                >
                                  {it.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      {item === "Personal" && (
                        <div className="p-4 pt-10 last:pb-8">
                          <a
                            href="/help-me-decide"
                            className="inline-flex justify-center items-center rounded-full bg-transparent text-black border-black hover:border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white ui-focus-visible:bg-default-response ui-focus-visible:border-default-response ui-focus-visible:text-white active:bg-muted active:border-muted active:text-white focus:outline-0 ui-focus-visible:outline-1 border-4 font-semibold py-2 px-6"
                            title="Help me decide"
                            rel="nofollow"
                          >
                            <span>Help me decide</span>
                            <svg
                              viewBox="0 0 15 15"
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline-block h-4 pl-2"
                            >
                              <path
                                d="m7.926 13 5.5-5.5-5.5-5.5M1.218 7.5h12.208"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(menuItems).map((item) => (
            <div key={item} className="relative">
              <button
                onClick={() => handleDropdownToggle(item)}
                className="hover:bg-[#4F46E5] hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                {item}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen === item && Array.isArray(menuItems[item]) && (
                <div className="mt-2 space-y-2">
                  {menuItems[item].map((subItem, index) => (
                    <div key={index}>
                      <a
                        href={subItem.link}
                        className="text-lg font-medium text-gray-900"
                      >
                        {subItem.heading}
                      </a>
                      {Array.isArray(subItem.items) && (
                        <div className="mt-2">
                          {subItem.items.map((it, idx) => (
                            <a
                              key={idx}
                              href={it.link}
                              className="block mt-1 text-sm font-medium"
                            >
                              {it.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#"
            className="flex items-center hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            <svg
              className="h-6 w-6 mr-2"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 891.024 891.024"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8 l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9 c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75 l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7 C1,142.575-3.5,162.675,2.8,180.875z"></path>
                </g>
              </g>
            </svg>
            +91 9473196196
          </a>
          <button className="bg-black hover:bg-[#4F46E5] text-white w-full py-2 rounded-full text-base font-medium">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Headers;

// import React, { useEffect, useState } from 'react';

// // import components
// import Nav from './Nav';
// import NavMobile from './NavMobile';

// // import logo
// import Logo from '../assets/img/gha.png';

// const Header = () => {
//   const [bg, setBg] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY > 80) {
//         setBg(true);
//       } else {
//         setBg(false);
//       }
//     });
//   });

//   return (
//     <header
//       className={`${
//         bg && 'bg-white shadow-md py-4'
//       } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
//     >
//       <div className='container mx-auto flex items-center justify-between'>
//         {/* logo */}
//         <a href='/'>
//           <img src={Logo} alt='logoimage' className="h-12 w-auto" />
//         </a>
//         {/* nav */}
//         <Nav />
//         {/* nav mobile */}
//         <NavMobile />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import Logo from '../assets/img/gha.png';

// const Headers = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const handleDropdownToggle = (menu) => {
//     setDropdownOpen(dropdownOpen === menu ? null : menu);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img className="h-12 w-auto" src={Logo} alt="Logo" />
//             </div>
//             {/* <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['Support', 'Business', 'Personal', 'Attorneys', 'Forms'].map((item) => (
//                   <div key={item} className="relative">
//                     <button
//                       onClick={() => handleDropdownToggle(item)}
//                       className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
//                     >
//                       {item}
//                       <svg
//                         className="ml-1 h-4 w-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                     {dropdownOpen === item && (
//                       <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                         <div className="py-1">
//                           <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
//                           <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
//                           <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 3</a>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div> */}
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <a href="#" className="flex items-center text-black px-3 py-2 rounded-md text-sm font-medium">
//                 <svg className="h-6 w-6 mr-2" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 891.024 891.024" xmlSpace="preserve">
//                   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                   <g id="SVGRepo_iconCarrier">
//                     <g>
//                       <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8 l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9 c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75 l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7 C1,142.575-3.5,162.675,2.8,180.875z"></path>
//                     </g>
//                   </g>
//                 </svg>
//                 +91 9473196196
//               </a>
//               <button className="ml-3 bg-black hover:bg-[#4F46E5] text-white px-3 py-2 rounded-full text-sm font-medium">Sign in</button>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {['Support', 'Business', 'Personal', 'Attorneys', 'Forms'].map((item) => (
//             <div key={item} className="relative">
//               <button
//                 onClick={() => handleDropdownToggle(item)}
//                 className="hover:text-gray-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
//               >
//                 {item}
//                 <svg
//                   className="ml-1 h-4 w-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               {dropdownOpen === item && (
//                 <div className="mt-2 space-y-1">
//                   <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Submenu 1</a>
//                   <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Submenu 2</a>
//                   <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Submenu 3</a>
//                 </div>
//               )}
//             </div>
//           ))}
//           <a href="#" className="flex items-center text-black block px-3 py-2 rounded-md text-base font-medium">
//             <svg className="h-6 w-6 mr-2" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 891.024 891.024" xmlSpace="preserve">
//               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//               <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//               <g id="SVGRepo_iconCarrier">
//                 <g>
//                   <path d="M2.8,180.875c46.6,134,144.7,286.2,282.9,424.399c138.2,138.2,290.4,236.301,424.4,282.9c18.2,6.3,38.3,1.8,52-11.8 l92.7-92.7l21.6-21.6c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.4c-19.5-19.5-51.2-19.5-70.7,0l-38.899,38.9 c-20.2,20.2-52.4,22.2-75,4.6c-44.7-34.8-89-73.899-131.9-116.8c-42.9-42.9-82-87.2-116.8-131.9c-17.601-22.6-15.601-54.7,4.6-75 l38.9-38.9c19.5-19.5,19.5-51.2,0-70.7l-143.5-143.5c-19.5-19.5-51.2-19.5-70.7,0l-21.6,21.6l-92.7,92.7 C1,142.575-3.5,162.675,2.8,180.875z"></path>
//                 </g>
//               </g>
//             </svg>
//             +91 9473196196
//           </a>
//           <button className="bg-black hover:bg-[#4F46E5] text-white w-full px-3 py-2 rounded-full text-base font-medium">Sign in</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Headers;
