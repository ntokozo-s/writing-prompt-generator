function generatePrompt(event) {
  event.preventDefault();

  new Typewriter("#story-prompt", {
    strings: "A prince has choose between the crown and his true love.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let promptForm = document.querySelector("#story-prompt-form");
promptForm.addEventListener("submit", generatePrompt);
