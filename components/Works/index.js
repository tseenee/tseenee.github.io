import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageLayout from "../PageLayout";
// @ts-ignore
import Project1Image from "./assets/work1.png";

function Work({ className = "", image, children }) {
  return (
    <div
      className={`flex flex-col lg:flex-row rounded transition-all drop-shadow bg-slate-900 hover:drop-shadow-xl ${className}`}
    >
      <div className="w-[100%] lg:w-[320px] overflow-hidden rounded-t lg:rounded-l lg:rounded-t-none">
        {image}
      </div>
      <div className="px-8 py-4 flex-1 text-slate-400">{children}</div>
    </div>
  );
}

export default function () {
  return (
    <PageLayout id="works">
      <h2 className="text-slate-500 text-4xl">Works</h2>
      <div className="mt-8 px-4 lg:px-12">
        <p className="mb-8 text-slate-500 font-light">
          Here are my most notable works until now.
        </p>
        <Work image={<img className="w-full h-full" src={Project1Image.src} />}>
          <h3 className="text-xl text-slate-300 font-mono">
            Personal Portofolio
          </h3>
          <p>
            This is my first project using NextJS which I completed in just
            about over 1 week and a half.
          </p>
          <p>You can check the source code through below link.</p>
          <p className="mt-4 flex">
            <a
              href="#home"
              className="p-4 text-xs lg:text-base rounded bg-slate-800 inline-block hover:bg-slate-700 transition-all"
            >
              <FontAwesomeIcon icon={faLink} /> Link to
            </a>
            <a
              href="https://github.com/tseenee/tseenee.github.io"
              target="_blank"
              className="p-4 text-xs lg:text-base ml-4 font-mono rounded bg-slate-800 inline-block hover:bg-slate-700 transition-all"
            >
              <FontAwesomeIcon icon={faCode} /> Source code
            </a>
          </p>
        </Work>
        <Work
          className={"mt-16"}
          image={
            <div className="flex items-center justify-center h-full">
              <p className="block">Coming soon!</p>
            </div>
          }
        >
          <h3 className="text-xl text-slate-300 font-mono">
            Online Domino Game(Mongolian)!
          </h3>
          <p>This is a project that I worked with my friends for a game.</p>
          <p>You can check the source code through below link.</p>
          <p className="mt-4 flex">
            <a
              href="#"
              className="p-4 text-xs lg:text-base rounded bg-slate-800 inline-block hover:bg-slate-700 transition-all"
            >
              <FontAwesomeIcon icon={faLink} /> Link to
            </a>
            <a
              href="#"
              className="p-4 text-xs lg:text-base ml-4 font-mono rounded bg-slate-800 inline-block hover:bg-slate-700 transition-all"
            >
              <FontAwesomeIcon icon={faCode} /> Source code
            </a>
          </p>
        </Work>
      </div>
    </PageLayout>
  );
}
