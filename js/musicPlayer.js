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

    this.playBtn.addEventListener("click", () => {
      const isPlaying = this.musicContainer.classList.contains("play");

      if (isPlaying) {
        this.pauseSong();
      } else {
        this.playSong();
      }
    });

    this.prevBtn.addEventListener("click", this.prevSong);
    this.nextBtn.addEventListener("click", this.nextSong);

    this.audio.addEventListener("timeupdate", this.updateProgress);
    this.progressContainer.addEventListener("click", this.setProgress);
    this.audio.addEventListener("ended", this.nextSong);

    this.audio.addEventListener("timeupdate", this.durTime);

    this.songs = ["hey", "prp", "beat01"];
    this.songIndex = 2;
    this.loadSong(this.songs[this.songIndex]);
  }

  loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/prp.jpg`;
  }

  playSong() {
    this.musicContainer.classList.add("play");
    this.playBtn.querySelector("i.fas").classList.remove("fa-play");
    this.playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
  }

  pauseSong() {
    this.musicContainer.classList.remove("play");
    this.playBtn.querySelector("i.fas").classList.add("fa-play");
    this.playBtn.querySelector("i.fas").classList.remove("fa-pause");

    audio.pause();
  }

  prevSong = () => {
    this.songIndex--;

    if (this.songIndex < 0) {
      this.songIndex = this.songs.length - 1;
    }

    this.loadSong(this.songs[this.songIndex]);

    this.playSong();
  };

  nextSong = () => {
    this.songIndex++;

    if (this.songIndex > this.songs.length - 1) {
      this.songIndex = 0;
    }

    this.loadSong(this.songs[this.songIndex]);

    this.playSong();
  };

  updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  };

  setProgress = (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  };

  durTime = (e) => {
    const { duration, currentTime } = e.srcElement;
    var sec;
    var sec_d;

    // define minutes currentTime
    let min = currentTime == null ? 0 : Math.floor(currentTime / 60);
    min = min < 10 ? "0" + min : min;

    // define seconds currentTime
    function get_sec(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec = Math.floor(x) - 60 * i;
            sec = sec < 10 ? "0" + sec : sec;
          }
        }
      } else {
        sec = Math.floor(x);
        sec = sec < 10 ? "0" + sec : sec;
      }
    }

    get_sec(currentTime, sec);

    // change currentTime DOM
    currentTime.innerHTML = min + ":" + sec;

    // define minutes duration
    let min_d = isNaN(duration) === true ? "0" : Math.floor(duration / 60);
    min_d = min_d < 10 ? "0" + min_d : min_d;

    function get_sec_d(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec_d = Math.floor(x) - 60 * i;
            sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
          }
        }
      } else {
        sec_d = isNaN(duration) === true ? "0" : Math.floor(x);
        sec_d = sec_d < 10 ? "0" + sec_d : sec_d;
      }
    }

    // define seconds duration

    get_sec_d(duration);

    // change duration DOM
    duration.innerHTML = min_d + ":" + sec_d;
  };
}
