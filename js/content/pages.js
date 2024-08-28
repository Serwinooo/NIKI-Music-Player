const mainHeader = document.querySelector('#main-header');
const subHeader = document.querySelector('#sub-header');
const albumBuzz = document.querySelector('.row');
const albumLiveAtTheWiltern = document.querySelector('.row2');
const albumMoonchild = document.querySelector('.row3');
const albumNicole = document.querySelector('.row4');
const albumZephyr = document.querySelector('.row5');
const bodybg = document.querySelector('body');
const albumContainer = document.querySelector('.album-container');
const playList = document.querySelector('.playlist');
const allSongs = document.querySelector('.allSongs');

const homePage = () => {

    mainHeader.textContent = 'NIKI Zefanya';
    subHeader.textContent = 'Artist';
    
    albumBuzz.style.display = 'none';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumNicole.style.display = 'none';
    albumZephyr.style.display = 'none';
    allSongs.style.display = 'block';
    bodybg.style.background = '';
    albumLiveAtTheWiltern.style.display = 'none';
}

const albumsPage = () => {
    mainHeader.textContent = "NIKI Zefanya";
    subHeader.textContent = 'Albums';
    albumContainer.style.display = 'flex';
    albumBuzz.style.display = 'none';
    playList.style.display = 'none';
    albumNicole.style.display = 'none';
    allSongs.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';

    bodybg.style.background = '';
}

const buzzList = () => {
    mainHeader.textContent = "NIKI's Album";
    subHeader.textContent = 'Buzz';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumNicole.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';

    albumBuzz.style.display = 'block';
    bodybg.style.backgroundImage = 'url("https://images.genius.com/09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png")';
    bodybg.style.backgroundRepeat = 'none';
}

const liveList = () => {
    mainHeader.textContent = "NIKI's Album";
    subHeader.textContent = 'Live At The Wiltern';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumBuzz.style.display = 'none';
    albumNicole.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'block';
    bodybg.style.backgroundImage = 'url("https://images.genius.com/09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png")';
   
}

const nicoleList = () => {
    mainHeader.textContent = "NIKI's Album";
    subHeader.textContent = 'Nicole';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumBuzz.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumNicole.style.display = 'block';
    bodybg.style.backgroundImage = 'url("https://images.genius.com/09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png")';

}

const moonChildList = () => {
    mainHeader.textContent = "NIKI's Album";
    subHeader.textContent = 'Moonchild';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumBuzz.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';
    albumNicole.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumMoonchild.style.display = 'block';
    bodybg.style.backgroundImage = 'url("https://images.genius.com/09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png")';

}

const zephyrList = () => {
    mainHeader.textContent = "NIKI's Album";
    subHeader.textContent = 'Zephyr';
    albumContainer.style.display = 'none';
    playList.style.display = 'none';
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumBuzz.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';
    albumNicole.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumZephyr.style.display = 'block';
    bodybg.style.backgroundImage = 'url("https://images.genius.com/09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png")';

}

const profilePage = () => {

}

const playlistPage = () => {
    mainHeader.textContent = 'NIKI Zefanya';
    subHeader.textContent = 'Likes';
    
    albumBuzz.style.display = 'none';
    allSongs.style.display = 'none';
    albumLiveAtTheWiltern.style.display = 'none';
    albumNicole.style.display = 'none';
    albumMoonchild.style.display = 'none';
    albumZephyr.style.display = 'none';
    albumContainer.style.display = 'none';
    playList.style.display = 'flex';
    bodybg.style.background = '';


}

// document.getElementById('music-player').addEventListener('click', function() {
//     this.classList.toggle('show-progress');
// });
