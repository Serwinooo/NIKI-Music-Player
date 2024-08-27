fetch('../data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched Data:', data);

    const row = document.querySelector('.row');
    const musicPlayer = document.getElementById('music-player');
    const playPauseBtn = document.getElementById('play-pause');
    const prevSongBtn = document.getElementById('prev-song');
    const nextSongBtn = document.getElementById('next-song');
    const shuffleBtn = document.getElementById('shuffle');
    const repeatOneBtn = document.getElementById('repeat-one');
    const repeatAllBtn = document.getElementById('repeat-all');

    let currentSong = null;
    let currentSongIndex = -1;
    const songs = [];

    const playSong = (index) => {
      if (currentSong) {
        currentSong.pause();
      }
      currentSong = songs[index];
      currentSong.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    };

    const playNext = () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong(currentSongIndex);
    };

    row.innerHTML = '';

    data.media.forEach((song, index) => {
      if (song.album === 'Buzz') {

        const figure = document.createElement('figure');
        const figcap = document.createElement('figcaption');

        const audio = new Audio(`${song.path}`);
        songs.push(audio); // Store the song object
        audio.addEventListener('ended', playNext);

        const img = document.createElement('img');
        img.src = song.cover;
        img.classList.add('img-list');

        img.addEventListener('click', () => {
          currentSong = audio;
          currentSongIndex = index;
          musicPlayer.style.display = 'flex';
          audio.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });

        const title = document.createElement('h4');
        title.textContent = song.title;

        figure.appendChild(img);
        figcap.appendChild(title);
        figure.appendChild(figcap);

        row.appendChild(figure);
      }
    });

    playPauseBtn.addEventListener('click', () => {
      if (currentSong) {
        if (currentSong.paused) {
          currentSong.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
          currentSong.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
      }
    });

    prevSongBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSong(currentSongIndex);
    });

    nextSongBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong(currentSongIndex);
    });

    shuffleBtn.addEventListener('click', () => {
      currentSongIndex = Math.floor(Math.random() * songs.length);
      playSong(currentSongIndex);
    });

    repeatOneBtn.addEventListener('click', () => {
      if (currentSong) {
        currentSong.loop = !currentSong.loop;
        repeatOneBtn.style.backgroundColor = currentSong.loop ? '#ff6f61' : '#f0f0f0'; // Change color based on loop state
      }
    });

    repeatAllBtn.addEventListener('click', () => {
      if (currentSong) {
        currentSong.loop = false;
        repeatAllBtn.style.backgroundColor = '#f0f0f0'; // Normal color
        currentSong.addEventListener('ended', playNext);
      }
    });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
