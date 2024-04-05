function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load the script: ${src}`));

    document.head.appendChild(script);
  });
}

export default loadScript;
