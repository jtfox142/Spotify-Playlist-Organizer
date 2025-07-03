import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext} from "react"
import fetchPlaylists from '../utilitites/fetchPlaylists'

const HandlePlaylists = () => {

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
  
  const { token } = useContext(AuthContext)
  if(token) {
    fetchPlaylists(token)
    const playlists = JSON.parse(localStorage.getItem("playlists"))

    if(playlists.items)
      console.log("PlaylistName: ", playlists.items[0].name)
  }
  return (
    <AuthProvider authConfig={authConfig}>
      <h1>LANDED</h1>
    </AuthProvider>
  )
}

export default HandlePlaylists