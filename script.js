let btn = document.querySelector("#mike");
let content = document.querySelector(".content");

function speak(sentence) {
  const textSpeak = new SpeechSynthesisUtterance(sentence);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  window.speechSynthesis.speak(textSpeak);
}

function greet() {
  let day = new Date();
  let hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning boss");
  } else if (hr == 12) {
    speak("Good noon boss");
  } else if (hr > 12 && hr <= 17) {
    speak("Good Afternoon boss");
  } else speak("Good Evening  boss");
}

window.addEventListener("load", () => {
  speak("Activation  Jarvis");   
  greet();
  speak("How can I help You?");

  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();

  recognition.onresult = (e) => {
    let current = e.resultIndex;
    let transcript = e.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
  };

  btn.addEventListener("click", () => {
    recognition.start();
  });
  function speakThis(message) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";

    if (message.includes("hey") || message.includes("hello")) {
      let finalText = "Hello Bro";
      speech.text = finalText;
    } else if (message.includes("name")) {
      let finalText = "My name is Jarvis";
      speech.text = finalText;
    } else if (
      message.includes("open google") ||
      message.includes("ok google") ||
      message.includes("hey google")
    ) {
      window.open("http://google.com", "_blank");
      let finalText = "Opening google";
      speech.text = finalText;
    } else if (
      message.includes("open instagram") ||
      message.includes("open insta")
    ) {
      window.open("http://instagram.com", "_blank");
      let finalText = "Opening instagram";
      speech.text = finalText;
    } else if (message.includes("open youtube")) {
      window.open("http://youtube.com", "_blank");
      let finalText = "Opening Youtube";
      speech.text = finalText;
    } else if (
      message.includes("what is") ||
      message.includes("what are") ||
      message.includes("who is")
    ) {
      window.open(
        `http://www.google.com/search?q=${message.replace(" ", "+")}`,
        "_blank"
      );
      let finalText = "This is what I found on internet regarding " + message;
      speech.text = finalText;
    } else if (message.includes("wikipedia")) {
      window.open(
        `http://en.wikipedia.org/wiki/${message.replace(" wikipedia", " ")}`,
        "_blank"
      );
      let finalText = "This is what I found on wikipedia regarding " + message;
      speech.text = finalText;
    } else if (message.includes("time")) {
      let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });
      let finalText = time;
      speech.text = finalText;
    } else if (message.includes("date")) {
      let date = new Date().toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      });
      let finalText = date;
      speech.text = finalText;
    } else if (message.includes("calculator")) {
      window.open("Calculator:///");
      let finalText = "Opening Calculator";
      speech.text = finalText;
    } else {
      window.open(
        `http://www.google.com/search?q=${message.replace(" ", "+")}`
      );
      let finalText = "I found some information" + message + "on google";
      speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
  }
});
