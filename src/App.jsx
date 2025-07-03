import './App.css'
import fetchPlaylists from '../utilitites/fetchPlaylists'
import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"
import { useContext} from "react"
//import { ErrorProvider, ErrorComponent } from './ErrorBoundary'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './Fallback'

/*TODO

  * Create a landing page that asks for the user's credentials/have spotify ask for user and password
  * Error handling so that the user doesn't have to refresh the page
  * Display a list of the user's playlists, allow them to select which one they want to organize
    * As a first step, it would be easier to ask for the name of the playlist and query based on that
  * Organize the selected playlist
    * Query the tracks from the selected playlist
    * Any playlists that share more than two subgenres, group together in an object
    * Display up to three recommended new playlists, min size is 4 songs

*/

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
    if(token) {
      fetchPlaylists(token)
      const playlists = JSON.parse(localStorage.getItem("playlists"))

      if(playlists.items)
        console.log("PlaylistName: ", playlists.items[0].name)
    }
    else {
      console.log("Ruh ro raggy, we got an error!")
    }

    return <>
      <>boop</>
      {/*<h4>Access Token</h4>
      <pre>{token}</pre>*/}
    </>
  }

  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback}>
        <AuthProvider authConfig={authConfig}>
          <UserInfo/>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
