import './App.css'
import { useEffect, useState, useContext } from 'react'
import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
//import spotifyAuth from '../utilitites/spotifyAuth'
import fetchPlaylists from '../utilitites/fetchPlaylists'

function App() {
  //const [token, setToken] = useState(0)
  //const [playlists, setPlaylists] = useState(0)

  const authConfig = {
    clientId: "0de20ca76d804702ae63c24a2cec5c2a",
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
    redirectUri: 'http://127.0.0.1:5173/callback',
    decodeToken: false,
    authLogin: false,
    scope: 'user-read-private user-read-email',
    onRefreshTokenExpire: (event) => event.logIn(undefined, undefined, "popup"),
  }

  const UserInfo = () => {
    const { token } = useContext(AuthContext)

    fetchPlaylists(token)
    const playlist0 = JSON.parse(localStorage.getItem("playlists"))

    if(playlist0.items)
      console.log("PlaylistsJSON: ", playlist0.items[0].name)
    //console.log("PLAYLISTNAME: ", playlistData)


    return <>
        <h4>Access Token</h4>
        <pre>{token}</pre>
    </>
  }

  /*useEffect(() => {
    setPlaylists(fetchPlaylists(token))
  }, [token])
  console.log(playlists)*/

  return (
    <div>
      <AuthProvider authConfig={authConfig}>
        <UserInfo/>
      </AuthProvider>
    </div>
  )
}

export default App
