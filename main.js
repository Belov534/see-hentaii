function playVideo(videoSource, videoCard) {
  const videoThumbnail = videoCard.querySelector("img");
  const videoTitle = videoCard.querySelector("h2");

  if (currentVideo && currentVideo.parentElement === videoCard) {
    // Clicked on the same video, pause and close it.
    pauseVideo();
    return;
  }

  if (currentVideo) {
    // Pause the previous video and remove it from the DOM.
    pauseVideo();
  }

  videoThumbnail.style.display = "none";
  videoTitle.style.display = "none";

  if (!currentVideo) {
    // Создаем новый элемент video только при необходимости
    currentVideo = document.createElement("video");
    currentVideo.style.width = "100%";
    currentVideo.style.height = "100%";
    currentVideo.style.borderRadius = "8px";
    currentVideo.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    currentVideo.style.objectFit = "cover";
    currentVideo.style.marginTop = "10px";
    videoCard.appendChild(currentVideo);
  }

  currentVideo.src = videoSource;
  currentVideo.controls = true;
  currentVideo.autoplay = true;
  currentVideo.style.display = "block";
}
