const fetchPlaylists = async (token) => {
  const result = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });
  console.log("REQUEST MADE")

  const jsonData = await result.json();
  console.log("JSONDATA: ", jsonData)

  localStorage.setItem("playlists", JSON.stringify(jsonData))

}

export default fetchPlaylists