const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Array to store the GIF URLs
const gifUrls = [
  "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif",
  "https://media.giphy.com/media/QLiqUx7aHg10bl5FVj/giphy.gif"
];

// Function to preload GIFs
function preloadGifs(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Preload the GIFs
preloadGifs(gifUrls);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 18th!";
  gif.src = gifUrls[0];
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Are you Sure?";
  gif.src = gifUrls[1];
});

/*noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});*/
