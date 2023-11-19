const filler = document.querySelector(".filler");

const fillerArray = [
  "Deb Prentice",
  "Kind",
  "Funny",
  "Empathetic",
  "Organized",
  "Efficient",
  "Creative",
  "Competent",
  "Thoughtful",
  "Flexible",
  "Motivated",
  "Detail-oriented",
  "Passionate",
];

const emojisArray = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "😄",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

function namePromise(arr1) {
  return new Promise((resolve, reject) => {
    arr1.map((word) => {
      if (word.includes("Deb Prentice")) {
        console.log("Inside namePromise");
        resolve((filler.innerHTML = word));
      }
    });
  });
}

function showPromise(arr2, arr3) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      console.log("Getting the emojis and adjectives....");
      const data =
        arr3[Math.floor(Math.random() * 12 + 1)] +
        arr2[Math.floor(Math.random() * 32)];
      resolve((filler.innerText = data));
    }, 3000);
  });
}

async function getData() {
  try {
    const data1 = await namePromise(fillerArray);
    const data2 = await showPromise(emojisArray, fillerArray);
    console.log(data1);
    console.log(data2);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
getData();
