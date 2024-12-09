function displayPrompt(response) {
  new Typewriter("#story-prompt", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePrompt(event) {
  event.preventDefault();

  let promptGeneratorInput = document.querySelector("#user-instructions");
  let apiKey = "8tca415f35dad4af35ac2o5bfe7061a9";
  let context =
    "You are a literature expert who enjoys writing fictional short-stories and has expertise in creating story writing prompts. Your mission is to generate a short-story prompt that is at least two to three sentences long at most. keep the sentences short and concise and display the prompt in basic HTML and separate each sentence with a <br />. Make sure to follow the user instructions. Do not include a title to the short-story.";
  let prompt = `User instructions: Generate a short-story prompt about ${promptGeneratorInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let shortStoryElement = document.querySelector("#story-prompt");
  shortStoryElement.innerHTML = `<div class="generating">⏳ Generating your short-story prompt...</div>`;

  axios.get(apiURL).then(displayPrompt);
}

let promptForm = document.querySelector("#story-prompt-form");
promptForm.addEventListener("submit", generatePrompt);
