import React from "react";
import "./typewriter.css";
import Typewriter from "typewriter-effect";
const TypeWriter = () => {
  return (
    <h2>
      Our Environment Promotes Each Child’s
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1">Social Development</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2">Emotional Development</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3">Physical Development</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-4">Cognitive Development</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </h2>
  );
};

export default TypeWriter;
