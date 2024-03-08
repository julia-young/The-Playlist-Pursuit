function loadPlaylist(emotion) {
  // Fetch the JSON data containing playlists
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      // Check if 'playlists' property exists and is an array
      if (data && Array.isArray(data["[playlists]"])) {
        // Find the playlist object with the corresponding emotion
        const playlist = data["[playlists]"].find(item => item.emotion === emotion);
        if (playlist) {
          // If playlist is found, display its embedded HTML
          const playlistContainer = document.getElementById('playlist-container');
          if (playlistContainer) {
            let html = playlist.embeddedHtml;
            let text = playlist.spotifyText;
            let img = playlist.spotifyImg;
            playlistContainer.innerHTML = `
                ${html}
                <img src=${img} width=2% />
                ${text}
                `;
          }
        } else {
          console.error(`Playlist not found for emotion: ${emotion}`);
        }
      } else {
        console.error('Invalid JSON format: "playlists" property not found or not an array');
      }
    })
    .catch(error => console.error('Error loading playlist:', error));
}

async function loadLogo(){
    const logoElement = document.createElement('div');
    logoElement.innerHTML = '<img src = "./images/companyLogo.png" width = 300 alt="the playlist pursuit">';
}

loadLogo();