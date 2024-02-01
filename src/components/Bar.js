import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { useGlobalContext } from "../context/global";
import { BarStyle } from "../styles/barStyle";
import { Link } from "react-router-dom";

export function Bar() {
  const [user, setUser] = useState({});
  const { updateGlobalContext } = useGlobalContext();

  function handleCallbakckResponse(response) {
    console.log("tokens", response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    localStorage.setItem("authToken", response.credential);
    window.location.reload();

  }

  function handleSignOut() {
    localStorage.removeItem("authToken");
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    window.location.reload();

  }

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      const userObject = jwtDecode(storedToken);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;

      // Atualize o contexto global aqui após decodificar o token
      updateGlobalContext({
        userName: userObject.name,
        userEmail: userObject.email,
        userPicture: userObject.picture
      });
    }

    // Verifica se 'google' está definido antes de usá-lo
    if (typeof google !== 'undefined' && google?.accounts?.id) {
      /* global google */
      google.accounts.id.initialize({
        client_id: "444281897399-28mi1f2shv7o0sim429lfsv8v8fon9id.apps.googleusercontent.com",
        callback: handleCallbakckResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" },
      );

      google.accounts.id.prompt();
    }
  }, []);

  return (
    <BarStyle>
      <div className="logo">
      <Link to={"/"}>
            <h1><span>A</span>nima</h1> 
      </Link>
      </div>
      <div id="signInDiv" className="google"></div>

      {user && (
        <div className="user">
          <Link to={`usuario/${user.email}`}>
          <img src={user.picture} alt={user.name} />
          </Link>
          <h1>{user.name}</h1>      
        {Object.keys(user).length !== 0 && (
        <button class="button" onClick={(e) => handleSignOut()}>
  <div class="button-box">
    <span class="button-elem">
      <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
        ></path>
      </svg>
    </span>
    <span class="button-elem">
      <svg viewBox="0 0 46 40">
        <path
          d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
        ></path>
      </svg>
    </span>
  </div>
</button>
      )}
        </div>
      )}
    </BarStyle>
  );
}
