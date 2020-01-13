window.addEventListener('load', function () {

  let chatBtn = document.getElementById("chatButton");
  let txt = document.getElementById("textBox");
  var trainingArea = document.getElementById("trainArea");

  let answersData = localStorage.getItem("botTalks");
  let botTalks = answersData ? JSON.parse(answersData) : [
    localStorage.setItem('botTalks',
      JSON.stringify([
        "Hi! How are you?",
        "I'm fine, thanks!",
        "My name is Di, and my creator's name is DioCode!",
        "I don't know, but you can teach me.",
        "I was created in december 2019.",
        "I'm a robot and what?",
        "Coockies",
        "I don't know, sorry"
      ])
    )
  ];

  botTalks = JSON.parse(localStorage.getItem('botTalks'));

  let botVizual = document.getElementById('botVizual');
  let chat = document.getElementById('chat');

  let divsArr = [];

  function botText(TEXT) {
    let divBotText = document.createElement("div");

    divBotText.innerHTML = TEXT;

    divBotText.classList.add('botText');

    botVizual.appendChild(divBotText);

    setTimeout(() => divBotText.remove(), 5000);
  }

  function newDiv(TEXT) {
    let newdiv = document.createElement("div");

    if (TEXT.length > 77) {
      newdiv.innerHTML = `${TEXT.substring(0, 77)}...`;
    } else {
      newdiv.innerHTML = TEXT;
    }

    newdiv.style.width = `${newdiv.innerHTML.length} * '%'`;
    newdiv.style.maxWidth = "25%";
    newdiv.style.lineHeight = "20px";
    newdiv.style.maxHeight = "80px";

    newdiv.style.background = "linear-gradient(180deg, rgba(234,140,237,1) 50%, rgba(0,194,237,1) 100%)";
    newdiv.style.backgroundAttachment = "fixed";
    newdiv.style.position = "absolute";
    newdiv.style.right = "4%";
    newdiv.style.bottom = "15%";
    newdiv.style.borderRadius = "20px";
    newdiv.style.borderBottomRightRadius = "0";
    newdiv.style.padding = "10px 10px";
    newdiv.style.border = "none";
    newdiv.style.transition = ".3s ease-out";
    newdiv.style.color = "white";
    newdiv.style.display = 'flex';
    newdiv.style.alignItems = 'center';

    newdiv.style.overflow = "hidden";
    newdiv.style.hyphens = "auto";
    newdiv.style.wordBreak = "break-all";

    if (window.matchMedia('(max-width: 414px)').matches) {
      newdiv.style.maxWidth = "40%";
    }

    divsArr.push(newdiv);

    setTimeout(() => {
      newdiv.remove();
    }, 10000);

    chat.appendChild(newdiv);

    let divHeight = window.getComputedStyle(newdiv).height;
    console.log(divHeight)

    for (let y = 0; y < divsArr.length - 1; y++) {
      if (window.matchMedia('(max-width: 414px)').matches) {
        if (divsArr[y].style.bottom == "15%" && divHeight == `${60}px` || divHeight == `${80}px`) {
          divHeight == `${60}px` ? divsArr[y].style.bottom = "26.5%" : divsArr[y].style.bottom = "29.5%"

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "26.5%" && divHeight == `${60}px` || divsArr[y].style.bottom == "29.5%" && divHeight == `${80}px`) {
          divHeight == `${60}px` ? divsArr[y].style.bottom = "38%" : divsArr[y].style.bottom = "43%"

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "38%" || divsArr[y].style.bottom == "43%") {
          divsArr[y].style.display = "none";
        }
        else if (divsArr[y].style.bottom == "15%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "21%" : divsArr[y].style.bottom = "24%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "21%" || divsArr[y].style.bottom == "24%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "27%" : divsArr[y].style.bottom = "33.05%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "27%" || divsArr[y].style.bottom == "33.05%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "33%" : divsArr[y].style.bottom = "42%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "33%" || divsArr[y].style.bottom == "42%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "39%" : divsArr[y].style.display = "none";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "39%") {
          divsArr[y].style.display = "none";
        }
      }
      else {
        if (divsArr[y].style.bottom == "15%" && divHeight == `${60}px` || divHeight == `${80}px`) {
          divHeight == `${60}px` ? divsArr[y].style.bottom = "26%" : divsArr[y].style.bottom = "28.5%"

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "266%" && divHeight == `${60}px` || divsArr[y].style.bottom == "28.5%" && divHeight == `${80}px`) {
          divHeight == `${60}px` ? divsArr[y].style.bottom = "37%" : divsArr[y].style.bottom = "42%"

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "37%" || divsArr[y].style.bottom == "42%") {
          divsArr[y].style.display = "none";
        }
        else if (divsArr[y].style.bottom == "15%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "21%" : divsArr[y].style.bottom = "23.5%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "21%" || divsArr[y].style.bottom == "23.5%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "27%" : divsArr[y].style.bottom = "32%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "27%" || divsArr[y].style.bottom == "32%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "33%" : divsArr[y].style.bottom = "40.5%";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "33%" || divsArr[y].style.bottom == "40.5%") {
          divHeight == `${20}px` ? divsArr[y].style.bottom = "39%" : divsArr[y].style.display = "none";

          setTimeout(() => newdiv.remove(), 10000);
        }
        else if (divsArr[y].style.bottom == "39%") {
          divsArr[y].style.display = "none";
        }
      }
    }
  }

  //  Machine learning  //
  let net = new brain.NeuralNetwork({ hiddenLayers: [3, 4, 4] });
  let trainData = [];
  let maxLength = 0;
  let remainingLength = 0;
  let botAnswer;

  //Greeting
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], output: { [1]: 1 } }); //HI
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0], output: { [1]: 1 } }); //HEY
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0], output: { [1]: 1 } }); //HELLO
  trainData.push({ input: [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0], output: { [1]: 1 } }); //Yo 

  //How are you?
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [2]: 1 } }); //How are you?
  trainData.push({ input: [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1], output: { [2]: 1 } }); //Are you ok?

  //What is your name?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //What is your name?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //Whats your name?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //Whats ur name?
  trainData.push({ input: [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //Your name?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //Who are you?
  trainData.push({ input: [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [3]: 1 } }); //Name?

  //Meaning of life?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [4]: 1 } }); //What is the meaning of life?
  trainData.push({ input: [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [4]: 1 } }); //Meaning of life?

  //How old are you?
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [5]: 1 } }); //How old are you?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [5]: 1 } }); //What is your age?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [5]: 1 } }); //Whats your age?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], output: { [5]: 1 } }); //Whats ur age?

  //Are you human?
  trainData.push({ input: [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], output: { [6]: 1 } }); //Are you human?
  trainData.push({ input: [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], output: { [6]: 1 } }); //human?

  //What you want?
  trainData.push({ input: [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], output: { [7]: 1 } }); //What you want?
  trainData.push({ input: [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: { [7]: 1 } }); //Do you want something?
  trainData.push({ input: [1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: { [7]: 1 } }); //Tell me, what you want?

  //Do you love me?
  trainData.push({ input: [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], output: { [8]: 1 } }); //Do you love me?

  let trainView = document.getElementById('trainView');
  let trainMessage = document.getElementById('trainMessage');
  let trainAnswer = document.getElementById('trainAnswer');
  let trainAI = document.getElementById('trainBtn');
  let trainingContainer = document.getElementById('trainingContainer');

  // Training Menu
  trainView.addEventListener('click', () => {
    if (trainingContainer.classList.contains('clicked')) {
      trainingContainer.classList.add('hideContainer');
      setTimeout(() => trainingContainer.style.opacity = "0", 1500)
      trainingContainer.classList.remove('showContainer');
      trainingContainer.classList.remove('clicked');

    } else {
      trainingContainer.classList.add('showContainer');
      setTimeout(() => trainingContainer.style.opacity = "1", 1500)
      trainingContainer.classList.remove('hideContainer');
      trainingContainer.classList.add('clicked');
    }

  })

  //////// training from localStorage
  let newInput = JSON.parse(localStorage.getItem('newInput')) || [];

  trainAI.addEventListener('click', () => {
    if (trainMessage.value && trainAnswer.value != "") {
      botTalks.push(trainAnswer.value);
      localStorage.setItem("botTalks", JSON.stringify(botTalks));

      newInput.push(textToBinary(trainMessage.value));
      localStorage.setItem('newInput', JSON.stringify(newInput));

      trainMessage.value = "";
      trainAnswer.value = "";

      trainView.click()

      setTimeout(() => window.location.reload(), 1600)
    }
  })

  trainAnswer.onkeydown = (event) => {
    if ((event.keyCode == 13 || event.which == 13) & (trainMessage.value && trainAnswer.value != "")) {
      trainAI.click();
    }
  }

  let tData = newInput; // Trained Data

  let commands = 9;
  let coms = [];

  if (tData) {
    for (let i = 0; i < tData.length; i++) {
      coms.push(commands);
      trainData.push({ input: tData[i], output: { [coms[i]]: 1 } });
      commands += 1;
    }
  }
  ////////

  //Commands to fill up the arrays with zeros. All arrays must be of same length
  for (let j = 0; j < trainData.length; j++) {
    if (trainData[j].input.length > maxLength) {
      maxLength = trainData[j].input.length;
    }
  }
  for (let q = 0; q < trainData.length; q++) {
    if (trainData[q].input.length < maxLength) {
      remainingLength = maxLength - trainData[q].input.length;
      zeroArray = Array(remainingLength).fill(0);
      trainData[q].input = trainData[q].input.concat(zeroArray);
    }
  }

  //Training
  net.train(trainData); //Using all the training data to train the AI

  //Load voices
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  }

  //Speak function
  let speak = () => {

    let data = textToBinary(txt.value);
    let result = brain.likely(data, net);

    for (let k = 1; k <= botTalks.length; k++) {
      if (result == k) {
        delayVar = k;
        botAnswer = botTalks[delayVar - 1];

        setTimeout(() => {
          //Voice
          let utterance = new SpeechSynthesisUtterance();

          let synth = window.speechSynthesis || window.mozspeechSynthesis || window.webkitspeechSynthesis;
          let voices = synth.getVoices();

          let voice = voices.filter(voice => voice.name == 'Fred')[0];
          utterance.voice = voice;

          utterance.text = botAnswer;
          utterance.volume = 1; //0-1 interval
          utterance.rate = 1; //0-2 interval
          utterance.pitch = 1.3; //0-2 interval
          speechSynthesis.speak(utterance);

          botText(botAnswer)
        }, 800);
      }
    }
  }

  //Chat button
  chatBtn.addEventListener("click", function () {
    if (txt.value != "") {
      newDiv(txt.value);
      speak();
    }
  });

  //Remove wrap for textarea & add 'Enter' works
  document.getElementById('textBox').onkeydown = (event) => {
    if ((event.keyCode == 13 || event.which == 13) & (txt.value != "")) {
      event.preventDefault();
      newDiv(txt.value);
      speak();
    }
  }

  // Convert text to binary code
  // console.log(textToBinary('Do you love me?').toString())

  function textToBinary(text) {
    //Making all letters as binary numbers for AI
    text = text.toUpperCase();
    let data = [];

    for (let i = 0; i < text.length; i++) {

      if (text[i] == "A") {
        data = data.concat([1, 0, 0, 0, 0, 0, 0]);
      }
      else if (text[i] == "B") {
        data = data.concat([1, 0, 0, 0, 0, 0, 1]);
      }
      else if (text[i] == "C") {
        data = data.concat([1, 0, 0, 0, 0, 1, 0]);
      }
      else if (text[i] == "D") {
        data = data.concat([1, 0, 0, 0, 0, 1, 1]);
      }
      else if (text[i] == "E") {
        data = data.concat([1, 0, 0, 0, 1, 0, 0]);
      }
      else if (text[i] == "F") {
        data = data.concat([1, 0, 0, 0, 1, 0, 1]);
      }
      else if (text[i] == "G") {
        data = data.concat([1, 0, 0, 0, 1, 1, 0]);
      }
      else if (text[i] == "H") {
        data = data.concat([1, 0, 0, 0, 1, 1, 1]);
      }
      else if (text[i] == "I") {
        data = data.concat([1, 0, 0, 1, 0, 0, 0]);
      }
      else if (text[i] == "J") {
        data = data.concat([1, 0, 0, 1, 0, 0, 1]);
      }
      else if (text[i] == "K") {
        data = data.concat([1, 0, 0, 1, 0, 1, 0]);
      }
      else if (text[i] == "L") {
        data = data.concat([1, 0, 0, 1, 0, 1, 1]);
      }
      else if (text[i] == "M") {
        data = data.concat([1, 0, 0, 1, 1, 0, 0]);
      }
      else if (text[i] == "N") {
        data = data.concat([1, 0, 0, 1, 1, 0, 1]);
      }
      else if (text[i] == "O") {
        data = data.concat([1, 0, 0, 1, 1, 1, 0]);
      }
      else if (text[i] == "P") {
        data = data.concat([1, 0, 0, 1, 1, 1, 1]);
      }
      else if (text[i] == "Q") {
        data = data.concat([1, 0, 1, 0, 0, 0, 0]);
      }
      else if (text[i] == "R") {
        data = data.concat([1, 0, 1, 0, 0, 0, 1]);
      }
      else if (text[i] == "S") {
        data = data.concat([1, 0, 1, 0, 0, 1, 0]);
      }
      else if (text[i] == "T") {
        data = data.concat([1, 0, 1, 0, 0, 1, 1]);
      }
      else if (text[i] == "U") {
        data = data.concat([1, 0, 1, 0, 1, 0, 0]);
      }
      else if (text[i] == "V") {
        data = data.concat([1, 0, 1, 0, 1, 0, 1]);
      }
      else if (text[i] == "W") {
        data = data.concat([1, 0, 1, 0, 1, 1, 0]);
      }
      else if (text[i] == "X") {
        data = data.concat([1, 0, 1, 0, 1, 1, 1]);
      }
      else if (text[i] == "Y") {
        data = data.concat([1, 0, 1, 1, 0, 0, 0]);
      }
      else if (text[i] == "Z") {
        data = data.concat([1, 0, 1, 1, 0, 0, 1]);
      }
      else if (text[i] == "?") {
        data = data.concat([1, 1, 1, 1, 1, 1, 1]);
      }
    }
    //Use the code below to read long arrays
    //console.log(data.toString());

    //Fill user input array with zeros to get correct length
    if (data.length < maxLength) {
      remainingLength = maxLength - data.length;
      zeroArray = Array(remainingLength).fill(0);
      data = data.concat(zeroArray);
    }
    return data;
  }
});