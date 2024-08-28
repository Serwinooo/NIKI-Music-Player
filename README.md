# Music Player Project

This project is a web-based music player featuring various albums by NIKI Zefanya. It includes functionalities such as playing songs, navigating between albums, and managing a playlist with shuffle and repeat options.

## Features

- **Navigation**: 
  - Home, Albums, Favorite, and Profile pages accessible via the navigation bar.
  - Each album is represented by a cover image and title.

- **Music Player**:
  - Displays album art, song title, and artist name.
  - Controls for play/pause, next/previous track, shuffle, repeat, and favorite.
  - Displays current time and total duration of the track.
  - Playlist section where all songs are listed.

## File Structure

```bash
├── css
│   ├── contents
│   │   ├── album.css
│   │   ├── controls.css
│   ├── nav.css
│   ├── play.css
│   └── style.css
├── img
│   ├── album-cover
│   │   ├── 09b8b308f780c6aeb61644b5a14b025a.1000x1000x1.png
│   │   ├── ab67616d0000b2736b2da09f115df7ca7697008a.jfif
│   │   ├── Nicole_(Album)_cover.png
│   │   ├── ab67616d0000b2735c3533d5e7cdda8c3c70f5f6.jfif
│   │   └── ab67616d0000b273874d4f55577035829c73dc66.jfif
├── js
│   ├── content
│   │   └── pages.js
│   └── script.js
├── data.json
├── index.html
└── README.md
```
## How To Use
- **Clone Repository:**
- git clone <repository_url>
- **Navigate To Project Directory:**
- cd <project_directory>
- Open index.html in your browser to view the music player.

## Dependencies
- **FontAwesome: For icons used in the music player controls.**
- Integrated via CDN in index.html.

## JavaScript Functionality
- **fetch('../data.json'):**
- Fetches the data containing the songs and their details from the data.json file.
- **playSong(index):**
- Plays the song at the specified index, updates the player UI, and handles the progress bar and song end behavior.
- **playNext():**
- Plays the next song in the list or a random song if shuffle is on.
- **repeatMode:**
- Manages the repeat functionality with three modes: off, once, and all.

## JSON Data Structure
- **The data.json file is structured as follows:**
{
  "media": [
    {
      "title": "Song Title",
      "artist": "Artist Name",
      "album": "Album Name",
      "path": "path/to/song.mp3",
      "cover": "path/to/album/cover.jpg"
    },
    ...
  ]
}

## To Do
-  Add more songs and albums.
- Improve responsiveness for mobile devices.
- Enhance the user interface with more interactive elements.
- Implement user authentication for the Profile page.

## License
- This project is licensed under the MIT License - see the LICENSE file for details.

- - Feel free to modify any part of this template to suit your specific needs.
