async function fetchPlaylistsData() {
  const response = await fetch('playlists.json');
  const data = await response.json();
  displayPlaylists(data);
}

function displayPlaylists(playlistsData) {
    const playlists = playlistsData["[playlists]"];

    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';

        const embeddedHtmlDiv = document.createElement('div');
        embeddedHtmlDiv.innerHTML = playlist.embeddedHtml;
        embeddedHtmlDiv.style.marginTop = '2%';

        playlistDiv.appendChild(embeddedHtmlDiv);

        const description = document.createElement('h5');
        description.textContent = playlist.description;
        description.style.marginBottom = '4%';
        playlistDiv.appendChild(description);
        
        playlistDiv.style.marginRight = '20%';
        playlistDiv.style.marginLeft = '20%';

        document.body.appendChild(playlistDiv);
    });
}

fetchPlaylistsData();