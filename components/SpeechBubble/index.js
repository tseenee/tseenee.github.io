import React, { useRef } from "react";
import { InView } from "react-intersection-observer";

import styles from "./index.module.css";

export default function ({ className = "", bubbleClassName = "", children }) {
  const ref = useRef(null);

  return (
    <InView threshold={0.6}>
      {({ inView, ref }) => (
        <div ref={ref} className="h-[80vh]">
          {
            <div
              className={`${className} ${
                inView ? "opacity-100" : "opacity-0"
              } transition-all fixed top-[10vh]`}
              ref={ref}
            >
              <div
                className={`bubble rounded p-6 drop-shadow-lg ${bubbleClassName} ${styles.bubble}`}
              >
                {children}
              </div>
            </div>
          }
        </div>
      )}
    </InView>
  );
}
