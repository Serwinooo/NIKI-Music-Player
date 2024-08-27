fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    const row = document.querySelector('.row');
    const row2 = document.querySelector('.row2');
    const row3 = document.querySelector('.row3');
    const row4 = document.querySelector('.row4');
    const row5 = document.querySelector('.row5');
    const musicPlayer = document.getElementById('music-player');
    const playPauseBtn = document.getElementById('play-pause');
    const prevSongBtn = document.getElementById('prev-song');
    const nextSongBtn = document.getElementById('next-song');
    const progress = document.getElementById('progress');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const albumArtImg = document.getElementById('album-art-img');
    const shuffleBtn = document.getElementById('shuffle');
    const favBtn = document.getElementById('favorite');
    const repeatBtn = document.getElementById('repeat');
    const playlist = document.querySelector('.playlist');
    const allSongs = document.querySelector('.allSongs');

    let currentSong = null;
    let currentSongIndex = -1;
    const songs = [];
    let isShuffleOn = false;
    let repeatMode = 'off';
    const wishlist = [];

    const updateFavBtn = () => {
      if (wishlist.includes(currentSongIndex)) {
        favBtn.innerHTML = '<i class="fas fa-heart" style="color: green;"></i>';
      } else {
        favBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    };

    const playSong = (index) => {
      if (index < 0 || index >= data.media.length) {
        console.error(`Invalid index: ${index}`);
        return;
      }
    
      // Stop the currently playing song
      if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0; // Reset timer to 0
      }
    
      currentSong = songs[index];
      currentSongIndex = index;
    
      if (!currentSong) {
        console.error(`Song at index ${index} is undefined.`);
        return;
      }
    
      currentSong.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      songTitle.textContent = data.media[index].title;
      artistName.textContent = data.media[index].artist;
      albumArtImg.src = data.media[index].cover;
    
      updateFavBtn(); // Update favorite button state when a new song plays
    
      // Add event listener here to avoid null reference
      currentSong.addEventListener('timeupdate', () => {
        const progressPercentage = (currentSong.currentTime / currentSong.duration) * 100;
        progress.style.width = `${progressPercentage}%`;
      });
    
      function songDuration() {
        // Clear any existing timeCount and timeDuration elements
        const existingTimeCount = document.querySelector('.time-count');
        const existingTimeDuration = document.querySelector('.time-duration');
        
        if (existingTimeCount) {
          existingTimeCount.remove(); // Remove previous timeCount
        }
      
        if (existingTimeDuration) {
          existingTimeDuration.remove(); // Remove previous timeDuration
        }
      
        let durationTime = Math.floor(currentSong.duration / 60);
        let totalTime = currentSong.duration % 60;
        let timeDuration = '';
      
        durationTime = durationTime < 10 ? "0" + durationTime : durationTime;
        totalTime = totalTime < 10 ? "0" + totalTime : totalTime;
        timeDuration = durationTime + ":" + Math.trunc(totalTime);
      
        const timeSet = document.createElement('p');
        timeSet.classList.add('time-duration');
        timeSet.innerHTML = timeDuration;
      
        const songInfo = document.querySelector('.time-details');
        songInfo.appendChild(timeSet);
      
        const timeCounter = document.createElement('p');
        timeCounter.classList.add('time-count');
        songInfo.appendChild(timeCounter);
      
        console.log(timeDuration);
      
        const updateTimeCount = () => {
          if (currentSong) {
            const currentMinutes = Math.floor(currentSong.currentTime / 60);
            const currentSeconds = Math.floor(currentSong.currentTime % 60);
      
            const formattedMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
            const formattedSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
      
            const timeCount = formattedMinutes + ":" + formattedSeconds;
      
            timeCounter.innerHTML = timeCount + "/";
            console.log(timeCount);
          }
        };
      
        // Update timeCount every second
        setInterval(updateTimeCount, 1000);
      }
      
      songDuration();      
    
      currentSong.addEventListener('ended', handleSongEnd);
    
      function handleSongEnd() {
        if (repeatMode === 'once') {
          playSong(currentSongIndex);
        } else if (repeatMode === 'all') {
          playNext();
        } else {
          if (currentSongIndex < songs.length - 1) {
            playNext();
          } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
          }
        }
      }
    };
    
    const playNext = () => {
      if (isShuffleOn) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
      } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
      }
      
      if (currentSongIndex >= 0 && currentSongIndex < songs.length) {
        playSong(currentSongIndex);
      } else {
        console.error(`playNext: Invalid song index ${currentSongIndex}`);
      }
    };
    

    row.innerHTML = '';
    row2.innerHTML = '';
    row3.innerHTML = '';
    row4.innerHTML = '';
    row5.innerHTML = '';
    allSongs.innerHTML = '';
    
    // Display songs in the respective rows based on the album name
    data.media.forEach((song, index) => {
      switch(song.album) {
        case 'Buzz':
          createSongElement(song, index, row);
          break;
        case 'Live At The Wiltern':
          createSongElement(song, index, row2);
          break;
        case 'Moonchild':
          createSongElement(song, index, row3);
          break;
        case 'Nicole':
          createSongElement(song, index, row4);
          break;
        case 'Zephyr':
          createSongElement(song, index, row5);
          break;
      }
    });
    
    // Display all songs in the .allSongs div
    data.media.forEach((song, index) => {
      createSongElement(song, index, allSongs);
    });
    
    // Function to create and append song elements
    function createSongElement(song, index, container) {
      const figure = document.createElement('figure');
      const figcap = document.createElement('figcaption');
    
      const audio = new Audio(song.path);
      songs.push(audio);
    
      // Set up event listener to calculate duration after loading metadata
      audio.addEventListener('loadedmetadata', () => {
        const duration = Math.floor(audio.duration);
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
    
        const artist = document.createElement('p');
        artist.textContent = `${song.artist}`;
    
        const durationElem = document.createElement('p');
        durationElem.textContent = `${minutes}:${seconds}`;
    
        figcap.appendChild(title);
        figcap.appendChild(artist);
        figcap.appendChild(durationElem);
      });
    
      const img = document.createElement('img');
      img.src = song.cover;
      img.classList.add('img-list');
    
      const title = document.createElement('h4');
      title.textContent = song.title;
    
      // Append elements to the figure
      figure.appendChild(img);
      figure.appendChild(figcap);
    
      // Make the entire figure clickable
      figure.addEventListener('click', () => {
        if (currentSong) {
          currentSong.pause();
          currentSong.currentTime = 0; // Reset timer to 0
        }
        playSong(index);
        musicPlayer.style.display = 'flex';
      });
    
      // Append figure to the specified container
      container.appendChild(figure);
    }

    favBtn.addEventListener('click', () => {
      if (wishlist.includes(currentSongIndex)) {
        wishlist.splice(wishlist.indexOf(currentSongIndex), 1); // Remove from wishlist
        removeFromPlaylist(currentSongIndex); // Remove from playlist
      } else {
        wishlist.push(currentSongIndex); // Add to wishlist
        addToPlaylist(currentSongIndex); // Add to playlist
      }
      updateFavBtn(); 
    });

    const addToPlaylist = (index) => {
      const playlistItem = document.createElement('div');
      playlistItem.classList.add('playlist-item');
      playlistItem.setAttribute('data-index', index);
    
      const img = document.createElement('img');
      img.src = data.media[index].cover;
      img.alt = `${data.media[index].title} cover`;
      img.classList.add('playlist-img');
    
      const songInfo = document.createElement('div');
      songInfo.classList.add('song-info');
    
      const title = document.createElement('p');
      title.textContent = data.media[index].title;
      title.classList.add('playlist-title');
    
      const artist = document.createElement('p');
      artist.textContent = data.media[index].artist;
      artist.classList.add('playlist-artist');
    
      const duration = document.createElement('p');
      duration.textContent = formatDuration(songs[index].duration);
      duration.classList.add('playlist-duration');
    
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = '<i class="fas fa-heart"></i>';
      removeBtn.style.color = 'green';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => {
        removeFromPlaylist(index);
      });
    
      // Append elements to the song info container
      songInfo.appendChild(title);
      songInfo.appendChild(artist);
      songInfo.appendChild(duration);
    
      // Append all elements to the playlist item
      playlistItem.appendChild(img);
      playlistItem.appendChild(songInfo);
      playlistItem.appendChild(removeBtn);
    
      // Make the playlist item playable when clicked
      playlistItem.addEventListener('click', () => {
        if (currentSong) {
          currentSong.pause();
          currentSong.currentTime = 0; // Reset timer to 0
        }
        playSong(index);
        musicPlayer.style.display = 'flex';
      });
    
      // Append the playlist item to the playlist container
      playlist.appendChild(playlistItem);
    };
    
    

    const removeFromPlaylist = (index) => {
      const playlistItem = playlist.querySelector(`[data-index="${index}"]`);
      if (playlistItem) {
        playlistItem.remove();
      }
    };

    const formatDuration = (duration) => {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    };

    shuffleBtn.addEventListener('click', () => {
      isShuffleOn = !isShuffleOn;
      shuffleBtn.style.color = isShuffleOn ? 'green' : '';
    });

    repeatBtn.addEventListener('click', () => {
      if (repeatMode === 'off') {
        repeatMode = 'once';
        repeatBtn.style.color = 'green';
      } else if (repeatMode === 'once') {
        repeatMode = 'all';
        repeatBtn.style.color = 'blue';
      } else {
        repeatMode = 'off';
        repeatBtn.style.color = '';
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
      if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
      }
    });

    nextSongBtn.addEventListener('click', playNext);

    currentSong.addEventListener('timeupdate', () => {
      const progressPercentage = (currentSong.currentTime / currentSong.duration) * 100;
      progress.style.width = `${progressPercentage}%`;
    });

  })
  .catch(error => console.error('Error loading JSON:', error));
