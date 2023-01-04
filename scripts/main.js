import VideoCard from "./Video_card.js";


function loadVideoCards() {
  fetch("../data/data.json")
    .then(resp => resp.json())
    .then(data => {
      const videoList = document.querySelector(".main_video-cards-section");

      data.videos.forEach(video => {
        console.log(video);
        videoList.append(new VideoCard(video));
      });

    });
}

loadVideoCards();