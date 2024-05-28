const sliderContainer = document.getElementById("root");
const slidesContainer = document.createElement("div");

slidesContainer.setAttribute("class", "slides");
sliderContainer.appendChild(slidesContainer);

const images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.webp"];
images.forEach((imgSrc) => {
  const slide = document.createElement("div");
  slide.setAttribute("class", "slide");
  const img = document.createElement("img");
  img.src = imgSrc;
  slide.appendChild(img);
  slidesContainer.appendChild(slide);
});

const prevButton = document.createElement("button");
prevButton.innerText = "<";
sliderContainer.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.innerText = ">";
sliderContainer.appendChild(nextButton);

const style = `
#root{
    position: relative;
    width: 600px;
    overflow: hidden;
}
.slides{
    display: flex;
}
.slide{
    min-width: 100%;
    transition:transform 0.5s ease;
}
img{
    width: 100%;

}
button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: none;
    cursor: pointer;
}
button:hover{
    background: #eee;

}
button:first-of-type{
    left: 10px;
}
button:last-of-type{
    right: 10px;
}
`;
const styleSheet = document.createElement("style");
styleSheet.setAttribute("type", "text/css");
styleSheet.innerText = style;

document.head.appendChild(styleSheet);

let currentIndex = 0;

const updateSlidePosition = () => {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
};
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  updateSlidePosition();
});
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  updateSlidePosition();
});
