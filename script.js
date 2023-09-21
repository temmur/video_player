const main_video = document.querySelector('.main_video video')
const main_video_title = document.querySelector('.main_video .title')
const video_playlist = document.querySelector('.video_playlist .videos')

const data = [
    {
    name: "Alien-Romulus",
    id: 1,
    video: "video/Alien: Romulus (2024) Trailer.mp4",
    duration: "1:03"
    },
    {
        name: "Gale-Stay Away",
        id:2,
        video: "video/Gale - Stay Away From OZ (Official Trailer).mp4",
        duration: "2:25"
    },
    {
        name: "Hyponic",
        id: 3,
        video: "video/Hypnotic - Official Trailer - Warner Bros. UK & Ireland.mp4",
        duration: "2:28"
    },
    {
        name: "The Equalizer",
        id: 4,
        video: "video/THE EQUALIZER 3 | Official Trailer (2023) Denzel Washington.mp4",
        duration: "3:15"
    },
    {
        name: "Fast Furious 3",
        id: 5,
        video: "video/Fast and Furious 3 Trailer (HD 720p).mp4",
        duration: "2:07"
    },
    {
        name: "The Equalizer",
        id: 4,
        video: "video/THE EQUALIZER 3 | Official Trailer (2023) Denzel Washington.mp4",
        duration: "3:15"
    },
    {
        name: "Gale-Stay Away",
        id:2,
        video: "video/Gale - Stay Away From OZ (Official Trailer).mp4",
        duration: "2:25"
    }
]
data.forEach((video,i)=>{
    let video_element = `
         <div class="video" data-id="${video.id}">
                <img src="images/play-button-svgrepo-com.svg" alt="">
                <p>${i + 1}</p>
                <h3 class="title">${video.name}</h3>
                <p class="time">${video.duration}</p>
            </div>
    `
    video_playlist.innerHTML += video_element
})

let videos = document.querySelectorAll('.video')
let list = document.querySelector('.list')
list.innerHTML += data.length
videos.forEach(select_video =>{
    select_video.onclick = () =>{
        for(all_videos of videos){
            all_videos.classList.remove('active')
            all_videos.querySelector('img').src = "images/play-button-svgrepo-com.svg"
        }
        select_video.classList.add('active')
        select_video.querySelector('img').src = "images/pause-circle-svgrepo-com.svg"
        let match_video = data.find(video => video.id == select_video.dataset.id)
        main_video.src = match_video.video
        main_video_title.innerHTML = match_video.name
    }
})

let toggleButton = document.querySelector('.toggleButton')

function togglePlay() {
    if (main_video.paused || main_video.ended) {
      main_video.play();
    } else {
      main_video.pause();
    }
  }
  function updateToggleButton() {
    toggleButton.innerHTML = main_video.paused ? "►" : "❚❚";
  }
  toggleButton.addEventListener("click", togglePlay);
  main_video.addEventListener("click", togglePlay);
  main_video.addEventListener("play", updateToggleButton);
  main_video.addEventListener("pause", updateToggleButton);


const progress = document.getElementById("progress");
const timer = document.getElementById( "timer" );

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((main_video.currentTime / main_video.duration) * 100);
    timer.innerHTML = Math.round(main_video.currentTime) + " seconds";
  });
}

progressLoop();


function skipVideo(){
    let sec = 10
    let min = 1
   for(let i = sec; i<sec + 10; i++){
    console.log()
   }
}