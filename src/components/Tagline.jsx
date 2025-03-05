import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Tagline = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const typed = new Typed(textRef.current, {
        strings: ["Muscles", "Strength", "Endurance"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-20 w-[40vw] flex flex-col items-center text-center bg-black/50 rounded-3xl shadow-[5px_2px_10px] shadow-purple-500/50">
        <h1 className="text-3xl font-bold">
          <span className="text-cyan-600">Build </span>
          <span ref={textRef} aria-live="polite"></span>
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
          suscipit adipisci possimus ipsum quasi eum ducimus doloribus harum eos
          dolore excepturi eligendi dolores odit neque commodi praesentium id
          aliquid corporis quia sint, numquam soluta ut labore. Sed eos natus
          laborum, maiores molestias alLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
          suscipit adipisci possimus ipsum quasi eum ducimus doloribus harum eos
          dolore excepturi eligendi dolores odit neque commodi praesentium id
          aliquid corporis quia sint, numquam soluta ut labore. Sed eos natus
          laborum, maiores molestias aliquid minima laboriosam impedit repellat
          voluptates exercitationem.iquid minima laboriosam impedit repellat
          voluptates exercitationem.
        </p>
      </div>
    </div>
  );
};

export default Tagline;
