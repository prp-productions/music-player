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
}
