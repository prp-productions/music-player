const musicContainer =document.querySelector('.music-container');
const playBtn =document.querySelector('#play');
const prevBtn =document.querySelector('#prev');
const nextBtn =document.querySelector('#next');
const audio =document.querySelector('#audio');
const progress =document.querySelector('.progress');
const progressContainer =document.querySelector('.progress-container');
const title =document.querySelector('#title');
const cover =document.querySelector('#cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 1;

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song
const progressContainer =document.querySelector('.progress-container');
audio.src = `music/${song}.mp3`;
cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
}

function pauseSong() {
    musicContainer.classList.remove('play');
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        audio.play();
        playBtn.innerHTML ='<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML ='<i class="fa fa-play"></i>';
    }
}