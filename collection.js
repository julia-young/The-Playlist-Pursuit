
async function fetchPlaylistsData() {
  const response = await fetch('playlistLinks.json');
  const data = await response.json();
  displayPlaylists(data);
}

function displayPlaylists(playlistsData) {
    const playlists = playlistsData["[playlists]"];

    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';

        const description = document.createElement('h6');
        description.textContent = playlist.description;
        playlistDiv.appendChild(description);

        const embeddedHtmlDiv = document.createElement('div');
        embeddedHtmlDiv.innerHTML = playlist.embeddedHtml;
        playlistDiv.appendChild(embeddedHtmlDiv);

        document.body.appendChild(playlistDiv);
    });
}

fetchPlaylistsData();