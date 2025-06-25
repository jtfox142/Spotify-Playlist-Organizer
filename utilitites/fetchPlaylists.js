const fetchPlaylists = async (token) => {
  const result = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  console.log("REQUEST MADE")

  return await result.json();
}

export default fetchPlaylists