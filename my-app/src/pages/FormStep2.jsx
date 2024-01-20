import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

const FormStep2 = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-500 to-purple-500 h-full w-full py-32">
      <div className="bg-white w-5/12 m-auto h-auto rounded-3xl shadow-md p-12">
        <div className="text-color text-2xl mb-4 font-semibold">
          Link Social Media Accounts
        </div>
        <div>
          {/*
            Instagram Link
          */}
          <div className="flex flex-row bg-gradient-to-br from-indigo-400 via-purple-600 to-pink-500 w-full h-16 p-4 pl-6 rounded-full text-3xl items-center mb-4 text-neutral-200">
            <AiFillInstagram />
            <a className="mx-auto">Link Instagram</a>
          </div>
        </div>
        <div>
          {/*
            LinkedIn Link
          */}
          <div className="flex flex-row bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 w-full h-16 p-4 pl-6 rounded-full text-3xl items-center mb-4 text-neutral-200">
            <AiFillLinkedin />
            <a className="mx-auto">Link LinkedIn</a>
          </div>
        </div>
        <div>
          {/*
            Twitter Link
          */}
          <div className="flex flex-row bg-gradient-to-br from-neutral-600 to-neutral-950 w-full h-16 p-4 pl-6 rounded-full text-3xl items-center mb-4 text-neutral-200">
            <AiFillTwitterSquare />
            <a className="mx-auto">Link X/Twitter</a>
          </div>
        </div>
        <div>
          {/*
            Facebook Link
          */}
          <div className="flex flex-row bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 w-full h-16 p-4 pl-6 rounded-full text-3xl items-center mb-4 text-neutral-200">
            <AiFillFacebook />
            <a className="mx-auto">Link Facebook</a>
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <a
              class="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
              href="/download"
            >
              <span class="font-medium transition-colors group-hover:text-white">
                {" "}
                Next{" "}
              </span>

              <span class="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
                <svg
                  class="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStep2;
