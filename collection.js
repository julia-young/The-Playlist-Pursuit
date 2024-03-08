function loadPlaylist(emotion) {
  // Fetch the JSON data containing playlists
  fetch("./playlistLinks.json")
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
            playlistContainer.innerHTML = playlist.embeddedHtml;
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
function loadAllPlaylists(emotions) {

}
