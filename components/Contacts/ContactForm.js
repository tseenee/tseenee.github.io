import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function () {
  const router = useRouter();
  const success = router.query.success;
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="post"
      className="flex-1 rounded-lg shadow-xl flex flex-col p-8 bg-white dark:bg-blue-500"
    >
      <input
        type="hidden"
        name="access_key"
        value="d0449309-d4cb-48b1-ba76-fc516eed9541"
      />
      <input
        type="hidden"
        name="redirect"
        value="https://tseenee.github.io/?success=1#contacts"
      />

      <h1 className="text-2xl font-bold text-gray-400">Send a message</h1>

      <label
        htmlFor="name"
        className="text-gray-500 font-light mt-8 dark:text-gray-50"
      >
        Your name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        name="name"
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
        htmlFor="message"
        className="text-gray-500 font-light mt-4 dark:text-gray-50"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
      ></textarea>
      <div className="">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg inline-block"
        >
          Send
          <FontAwesomeIcon className="ml-2" icon={faPaperPlane} />
        </button>
        {success && (
          <p
            className="text-green-600 inline-block ml-2"
            style={{ verticalAlign: "middle" }}
          >
            Thanks for the message! Will contact you soon(ish)!
          </p>
        )}
      </div>
    </form>
  );
}
