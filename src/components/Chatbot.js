import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "URL_TO_CHATBOT_SERVICE_WIDGET";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="chatbot"> {/* The chatbot widget will be loaded here */} </div>
  );
}

export default Chatbot;
