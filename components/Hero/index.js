import React from "react";
import ScrollIndicator from "../ScrollIndicator";
// @ts-ignore
import splashArt from "./splash.png";
// import { useTranslation } from 'next-i18next'

export default function () {
  // const { t } = useTranslation();
  const HeroSplashStyle = {
    backgroundImage: `url(${splashArt.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "bottom",
    backgroundPositionX: "right",
    backgroundSize: "90vh",
  };
  return (
    <main className="h-screen max-w-[100vw]" id="home" style={HeroSplashStyle}>
      <div className="p-4 relative h-full">
        <h2 className="text-3xl font-thin" style={{ letterSpacing: "0.24em" }}>
          JUNAI TSENDAYUSH
        </h2>
        <div className="flex absolute top-0 bottom-0 left-0 right-0 items-center p-4">
          <h1
            className="text-4xl lg:text-7xl font-thin"
            style={{ opacity: "0.69" }}
          >
            A fullstack{" "}
            <span style={{ fontFamily: "monospace" }}>engineer</span>!<br />
            and many more <span style={{ fontFamily: "fantasy" }}>talents</span>
          </h1>
        </div>
      </div>
      <ScrollIndicator>Scroll down to know about me</ScrollIndicator>
    </main>
  );
}
