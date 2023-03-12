import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function () {
  return (
    <form
      action="mailto:j.tsendayush@gmail.com"
      method="get"
      encType="text/plain"
      className="flex-1 rounded-lg shadow-xl flex flex-col p-8 bg-white dark:bg-blue-500"
    >
      <h1 className="text-2xl font-bold text-gray-400">Send a message</h1>

      <label
        htmlFor="fullname"
        className="text-gray-500 font-light mt-8 dark:text-gray-50"
      >
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

      <label
        htmlFor="email"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

      <label
        htmlFor="subject"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      />

      <label
        htmlFor="comments"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="comments"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      ></textarea>
      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
        >
          Send
          <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
}
