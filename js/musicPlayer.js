export class MusicPlayer {
  constructor() {
    this.musicContainer = document.getElementById("music-container");
    this.playBtn = document.getElementById("play");
    this.prevBtn = document.getElementById("prev");
    this.nextBtn = document.getElementById("next");

    this.audio = document.getElementById("audio");
    this.progress = document.getElementById("progress");
    this.progressContainer = document.getElementById("progress-container");
    this.title = document.getElementById("title");
    this.cover = document.getElementById("cover");
    this.currTime = document.querySelector("#currTime");
    this.durTime = document.querySelector("#durTime");
  }
  display() {
    this.musicContainer.innerHTML = `music`;
  }

  loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/prp.jpg`;
  }

  playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
  }

  pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.add("fa-play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
  }

  prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
  }

  nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
  }
  
  updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
  
  setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }

}
