const video = document.querySelector("#video");

video.addEventListener("click", () => {
  video.classList.add("loading");
  video.setAttribute("aria-label", "Video is buffering forever");
});
