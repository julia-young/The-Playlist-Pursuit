
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

        const embeddedHtmlDiv = document.createElement('div');
        embeddedHtmlDiv.innerHTML = playlist.embeddedHtml;
        playlistDiv.appendChild(embeddedHtmlDiv);
        playlistDiv.style.width="60%";
        playlistDiv.style.marginLeft="20%";
        playlistDiv.style.marginBottom="2%";
        playlistDiv.style.marginTop="3%";
        document.getElementById("script-container").appendChild(playlistDiv);

        const description = document.createElement('h5');
        description.textContent = playlist.description;
        description.style.marginTop="1%";
        description.style.marginLeft="4%";
        description.style.marginRight="4%";
        playlistDiv.appendChild(description);
    });
}

fetchPlaylistsData();