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

// setTimeout(() => {filler.innerText = fillerArray[0]}, 1000)

// setInterval(() => {filler.innerText = fillerArray[Math.floor(Math.random()* 13 + 1)] + emojis[Math.floor(Math.random()* 32 + 1)]}, 3000)

//creating
// function showName(fn, arr) {
//   setTimeout(() => ((filler.innerHTML = arr[0]), 1000));
// }

// function showPromise(arr2, arr3) {
//   setInterval(() => {
//     filler.innerText =
//       arr3[Math.floor(Math.random() * 13 + 1)] +
//       arr2[Math.floor(Math.random() * 32)];
//   }, 3000);
// }

//Resolving
// showName(showPromise(emojisArray, fillerArray), fillerArray);

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
        arr3[Math.floor(Math.random() * 13 + 1)] +
        arr2[Math.floor(Math.random() * 32)];
      resolve(filler.innerText = data);
    }, 3000);
  });
}

async function getData() {
  try {
    const data1 = await namePromise(fillerArray);
    const data2 = await showPromise(emojisArray, fillerArray);
    console.log(data1)
    console.log(data2)
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
getData();

// const adjectivePromise = namePromise.then(setInterval(() => {
//   filler.innerText =
//     fillerArray[Math.floor(Math.random() * 13 + 1)]
// }, 3000)).catch(error => error.message)

// const emojiPromise = adjectivePromise.then(setInterval(() => {
//   filler.innerText +=
//     emojisArray[Math.floor(Math.random() * 32)];
// }, 3000))

// emojiPromise.finally(() => filler.innerText += " , Coder")

// let showDescription = async function () {
//   for (words of fillerArray) {
//     if (words.includes("Deb Prentice")) {
//       filler.innerText = await words;
//     }
//   }
// };
// showDescription()
//   .then(
//     setInterval(() => {
//       filler.innerText = fillerArray[Math.floor(Math.random() * 13 + 1)];
//     }, 2000)
//   )
//   .then(
//     setInterval(() => {
//       filler.innerText =
//         emojisArray[Math.floor(Math.random() * 32 + 1)];
//     }, 3000)
//   );
