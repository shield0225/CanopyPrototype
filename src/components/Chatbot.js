import React, { useEffect } from "react";

function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.google.com"; // to be worked on
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="chatbot"> {} </div>
  );
}

export default Chatbot;
